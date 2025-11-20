import { useEffect, useState } from 'react'
import type { Repository } from './assets/types/Repository';
import RepositorySection from './assets/components/repositorySection/RepositorySection';
import SearchBar from './assets/components/searchBar/SearchBar';

function App() {

const [repository, setRepository] = useState<Repository | null>(null);
const [query, setQuery] = useState("");
const [flag, setFlag] = useState(true);

async function getRepository(query:string) {
  
  //caso a query esteja vazia, ou seja, sem buscas, vai procurar por estrelas
  
  const finalQuery = query.length === 0 ? "stars:>1" : query

  const params = new URLSearchParams({
    q : finalQuery,
    order: "desc",
    per_page: "1",
    sort: "stars"

  });
  
  const API_URL = `https://api.github.com/search/repositories?${params.toString()}`;

  const reponse = await fetch(API_URL);
  const data = await reponse.json()

  //o retorno da api é um array, então mesmo que eu coloque o primeiro pagination com 1 item
  //preciso pegar o indice 0
  setRepository(data.items[0])

  console.log(query)

}

useEffect(()=>{getRepository(query)}, [flag])
  
  return (
    <>
      <SearchBar 
      setQuery={setQuery}
      flag = {flag}
      setFlag={setFlag}
      
      ></SearchBar>
      {repository && <RepositorySection repository={repository}/>}
    
    </>

  )
}

export default App
