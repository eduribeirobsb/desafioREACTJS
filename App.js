import React, {useEffect, useState} from "react";
import api from './services/api'; // axios


import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState ([]);
  async function handleAddRepository() {
    //carregar a lista de repositório - disparar uma função assim que o componente é carregado
    useEffect (()=> {
        api.get('repositories').then(response =>{
          setRepositories(response.data); //onde vou salvar

        })
    }, [])
  }
  async function handleAddRepository() {
    const response = await api.post ('repositories', {
      title: 'Eduardo',
      url: 'https://www.',
      techs: ['Comer','Dormir']
    })
    setRepositories ([...repositories, response.data]); //imutabilidade
  }


  async function handleRemoveRepository() {
     await api.delete(`repositories/${id}`);

     setRepositories(repositories.filter(
          repository => repository.id != id
     ))
  }

  return (
    <div>
      <ul data-testid="repository-list">
         {repositories.map(repository=> (        
           <li key={repository.id}>
                {repository.title}

                <button onClick={() => handleRemoveRepository(repository.id)}>
                  Remover
                </button>
        </li>

     ))}
      </ul> 

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;