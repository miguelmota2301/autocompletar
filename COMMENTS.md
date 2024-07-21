# Auto-completar

## 12/07/2024:

Minha primeira impressão é que a funcionalidade auto-completar não é extremamente complexa, mas não tenho experiência com GraphQl. Então preciso estudar bastante para conseguir implementar essa conexão.

Pela pesquisa inicial, a técnica utilizada mais comum para implementar essa conexão é o **Backend for Frontend** (BFF).

Já resolvi o problema do meu computador ser Windows utilizando o WSL, emulando o Ubuntu. Preciso ver uma forma de emular o MacOS.

## 15/07/2024:

Código base do autocompletar está feito, mas a lista de sugestões utilizada foi uma bem básica, criada por mim. Então, preciso decidir uma forma de utilizar listas de sugestões mais complexas.

Preciso também mexer no design do site.

## 17/07/2024:

Backend e frontend conectados com sucesso. Entretanto, está sendo feita uma conexão direta entre os dois. Preciso, ainda, incluir o GraphQl nessa conexão.

Consegui fazer o site de acordo com os requisitos: Frontend -> GraphQl -> Backend. Aparentemente, o site não demonstra erros. Amanhã, farei uma teste mais pesado para conferir.

## 18/07/2024:

Testei o aplicativo em outro computador (Linux) e funcionou. Agora só focar nos ajustes finais.

## 19/072024:

Como a estrutura já está pronta, vou estudar Docker para poder deixar em contâiners e facilitar a execução do código.

O comando `docker compose up --build` já está subindo todas as partes do projeto.

Para rodar individualmente:

**Frontend**:
- `cd autocompletarv3/frontend`
- `npm install`
- `npm run dev`

**Backend**:
- `cd autocompletarv3/backend`
- `python manage.py runserver`

## Frontend

Para o frontend, decidi utilizar o [Vite](https://vitejs.dev/), ferramenta que otimiza aplicações web, para criar o template do projeto.

Além disso, o [Apollo Client](https://www.apollographql.com/docs/react/) será utilizado para fazer a conexão com o GraphQl, uma vez que ele permite e facilita uma integração nativa com React.

A parte frontend funciona de maneira bem simples: o usuário faz algum input (maior que 3 caracteres) -> o frontend faz uma requisição para o Apollo Client / GraphQl -> o Apollo Client / GraphQl faz uma requisição para o backend -> backend retorna no máximo 20 resultados -> frontend apresenta os resultados numa lista.

## Backend

Para o backend, decidi por utilizar da linguagem de programação Python, uma vez que é a linguagem que tenho mais familiaridade. Como a configuração de um servidor com código próprio quase nunca é o mais otimizado, resolvi utilizar o framework [Flask](https://flask.palletsprojects.com/en/3.0.x/). Decidi não utilizar o Django por entender que, nesse caso, ele não traria mais otimização que o Flask.

Para a lista de sugestões, fiz com que o servidor entregue os dados do arquivo JSON já populado na pasta do projeto conforme o QUERY do usuário.

O código base do backend está no arquivo **schema.py**.

### Atualização:17/07/2024

Tive muitos problemas com a configuração do servidor Flask com o GraphQl. Tentei usar duas bibliotecas, [Ariadne](https://ariadnegraphql.org/) e [Flask-GraphQl](https://github.com/graphql-python/flask-graphql), mas tive problemas de compatibilidade entre elas. A última vez que Flask-GraphQl foi há 4 anos.

Por esse motivo, decidi voltar atrás na decisão do framework utilizado para o backend: usarei o [Django](https://www.djangoproject.com/). Para tanto, o [Graphene-Django](https://docs.graphene-python.org/projects/django/en/latest/) será crucial para fazer a conexão com o GraphQl.

## Referências
[How to autocomplete](https://www.w3schools.com/howto/howto_js_autocomplete.asp), W3Schools.

[Tutorial tic-tac-toe React](https://react.dev/learn/tutorial-tic-tac-toe)

[GraphQl](https://graphql.org/learn/)

[BFF](https://blog.bitsrc.io/how-to-use-graphql-to-build-backend-for-frontends-bffs-4b7e5a0105d0)

[Docker](https://docs.docker.com/guides/docker-overview/)

[5 ways to fetch data ](https://www.freecodecamp.org/news/5-ways-to-fetch-data-react-graphql/)

[BFF](https://mobilelive.medium.com/backend-for-frontend-and-graphql-enhancing-frontend-development-1a9bfdee9d31)

[React Autocomplete](https://mui.com/material-ui/react-autocomplete/)

[React Autocomplete](https://www.npmjs.com/package/react-autocomplete)

[How to Implement React Autocomplete Input in Your Next Project](https://www.dhiwise.com/post/how-to-implement-react-autocomplete-input-in-your-next-project)

[Input](https://react.dev/reference/react-dom/components/input)

[Filter Documentation](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[Rendering Lists](https://react.dev/learn/rendering-lists)

[Search Guidelines](https://m3.material.io/components/search/guidelines)

[Design and Develop a Functional Search Bar in React](https://medium.com/@andwebdev/design-and-develop-a-functional-search-bar-in-react-44321ed3c244)

[The ultimate guide to search suggestions and autocomplete](https://www.sitesearch360.com/the-ultimate-guide-to-search-suggestions-and-autocomplete/)

[Query Suggestions](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/query-suggestions/js/)

[A Complete Guide for Lighting Fast Autocomplete Search Suggestion](https://medium.com/@piyush.neo/a-complete-guide-for-lighting-fast-autocomplete-search-suggestion-82a68a83bf68)

[Business in the Front, Party in the Back— Combining Flask and React for Full-Stack Web Development](https://medium.com/@katzmansof/party-in-the-front-business-in-the-back-combining-flask-and-react-for-full-stack-web-development-a079782288f0)

[How to connect ReactJS with flask API ?](https://www.geeksforgeeks.org/how-to-connect-reactjs-with-flask-api/)

[How to parse JSON File and show Output JSON using Flask](https://medium.com/@modimuskan397/how-to-parse-json-file-and-show-output-json-using-flask-c0b415f3f0a0)

[JavaScript, fetch, and JSON](https://flask.palletsprojects.com/en/3.0.x/patterns/javascript/)

[How to return a JSON response from a Flask API ?](https://www.geeksforgeeks.org/how-to-return-a-json-response-from-a-flask-api/)

[Using GraphQL with Python – A Complete Guide](https://www.apollographql.com/blog/complete-api-guide)

[Creating a GraphQL server with flask](https://medium.com/@marvinkome/creating-a-graphql-server-with-flask-ae767c7e2525)

[How to integrate Apollo client with React](https://dineshigdd.medium.com/how-to-integrate-apollo-client-with-react-8e07e93bd081)

[Quickstart: Compose and Django](https://github.com/docker/awesome-compose/tree/master/official-documentation-samples/django/)

[Setup Vite + Vue.js + Docker](https://dev.to/borisuu/setup-vite-vuejs-docker-32fb)

[How to use React or Vue with Vite and Docker ](https://dev.to/ysmnikhil/how-to-build-with-react-or-vue-with-vite-and-docker-1a3l)

[Finally, a CSS only solution to :hover on touchscreens](https://itnext.io/finally-a-css-only-solution-to-hover-on-touchscreens-c498af39c31c)

[Using Touch Events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events)
