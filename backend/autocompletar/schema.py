import graphene
from graphene_django.types import DjangoObjectType
import json

# Carregar dados do arquivo JSON
with open('data.json', 'r') as f:
    items = json.load(f)

class MovieType(graphene.ObjectType):
    title = graphene.String()

class Query(graphene.ObjectType):
    autocompletar = graphene.List(MovieType, query=graphene.String())

    # No loop que é feita a verificação de busca: se a palavra que o usuário digitou está no banco de dados, retorne no máximo 20 sugestoões
    def resolve_autocompletar(self, info, query):
        query = query.lower()
        sugestoes = []
        for item in items:
            if query in item['title'].lower():
                sugestoes.append({'title': item['title']})
        return sugestoes[:20]

schema = graphene.Schema(query=Query)
