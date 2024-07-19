# 

O data set IMDB Top 1000 foi retirado do site (https://www.kaggle.com/datasets/harshitshankhdhar/imdb-dataset-of-top-1000-movies-and-tv-shows?resource=download).

Licença: [CC0 1.0 Universal ](https://creativecommons.org/publicdomain/zero/1.0/)

Como alguns filmes possuem títulos menores do que 4 caracteres, resolvi tirá-los. Além disso, o data set original [IMDB Top 1000](backend/dados/imdb_top_1000.csv) possui mais algumas variáveis que não são importantes para a aplicação, então resolvi tirá-las também.

Uma vez que os dados originais vieram de um `.csv`, transformei-os em `.json`.

Fiz o uso da biblioteca pandas para manipular os dados.