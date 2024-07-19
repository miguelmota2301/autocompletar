import graphene
import autocompletar.schema

class Query(autocompletar.schema.Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)
