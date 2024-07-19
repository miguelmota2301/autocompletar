import './App.css';
import React, { useState, useEffect } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

// Definindo a query GraphQL para buscar sugestões
const GET_SUGESTOES = gql`
  query GetSugestoes($query: String!) {
    autocompletar(query: $query) {
      title
    }
  }
`;

const Autocompletar = () => {
  // Input de Busca
  const [inputValue, setInputValue] = useState('');

  // Lista de Sugestões
  const [sugestoes, setSugestoes] = useState([]);
  const [getSugestoes, { data }] = useLazyQuery(GET_SUGESTOES);

  // Atualiza as sugestões quando os dados são recebidos
  useEffect(() => {
    if (data && data.autocompletar) {
      setSugestoes(data.autocompletar);
    }
  }, [data]);

  // Função para lidar com a mudança de input
  const handleInputValueChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Faz a query ao backend se houver algum valor no input maior que 3
    if (value.length > 3) {
      getSugestoes({ variables: { query: value } });
    } else {
      setSugestoes([]);
    }
  };

  // Quando houver clique numa sugestão, mude o valor do campo de busca
  const handleSugestaoClick = (sugestao) => {
    setInputValue(sugestao.title);
    setSugestoes([]);
  };

  // Função que deixa em negrito a parte original do input na sugestão
  const Negrito = (sugestao, input) => {
    const lowerCasedInputValue = input.toLocaleLowerCase();
    const lowerCasedSugestao = sugestao.toLocaleLowerCase();
    const inputIndex = lowerCasedSugestao.indexOf(lowerCasedInputValue);
    if (inputIndex === -1) {return sugestao};
    const antes = sugestao.slice(0, inputIndex);
    const keyword = sugestao.slice(inputIndex, inputIndex + input.length);
    const depois = sugestao.slice(inputIndex + input.length);

    return (
      <>
        {antes}
        <strong>{keyword}</strong>
        {depois}
      </>
    );
  };  

  return (
    <div className='bloco-child'>
      <input
        type="search"
        id='autoCompletar'
        value={inputValue}
        onChange={handleInputValueChange}
        placeholder="Digite o nome de algum filme em seu idioma nativo..."
      />

      {sugestoes.length > 0 && (
        <ul className='lista-sugestao'>
          {sugestoes.map((sugestao, index) => (
            <li
            className='sugestao'
            key={index} 
            onClick={() => handleSugestaoClick(sugestao)}
            >
              {Negrito(sugestao.title, inputValue)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className='bloco-central'>
      <h1 className='titulo'>Top 1000 Filmes IMDB</h1>
      <Autocompletar />
      <footer className='autor'>Desenvolvido por <a className='links' href="https://www.linkedin.com/in/miguelmota23/" target='_blank'>Miguel Mota</a>{"\n"}</footer>
      <footer className='origemdb'>Dados coletados a partir desse <a className='links' target='_blank' href="https://www.kaggle.com/datasets/harshitshankhdhar/imdb-dataset-of-top-1000-movies-and-tv-shows">banco de dados</a></footer>
    </div>
  );
};

export default App;
