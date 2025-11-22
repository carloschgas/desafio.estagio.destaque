import { useEffect, useState } from 'react'
import type { Repository } from './assets/types/Repository';
import RepositorySection from './assets/components/repositorySection/RepositorySection';
import SearchBar from './assets/components/searchBar/SearchBar';

function App() {

const [repository, setRepository] = useState<Repository | null>(null);
const [query, setQuery] = useState("");
const [flag, setFlag] = useState(true);

async function getRepository(query:string) {
  
  const finalQuery = query.length === 0 ? "stars:>1" : query;

  const params = new URLSearchParams({
    q : finalQuery,
    order: "desc",
    per_page: "1",
    sort: "stars"
  });
  
  const SEARCH_URL = `https://api.github.com/search/repositories?${params.toString()}`;

  const searchResponse = await fetch(SEARCH_URL);
  const searchData = await searchResponse.json();

  const searchRepositoryResults = searchData.items[0];

  //pra pegar os verdadeiros watchers do repositorio tem que usar o link
  //https://api.github.com/repos/owner/name

  const detailsResponse = await fetch(searchRepositoryResults.url);  
  const detailsRepositoryResults = await detailsResponse.json();

  const repository: Repository = {
    full_name: searchRepositoryResults.full_name,
    name: searchRepositoryResults.name,
    stargazers_count: searchRepositoryResults.stargazers_count,
    forks_count: searchRepositoryResults.forks_count,
    subscribers_count: detailsRepositoryResults.subscribers_count,
  };

  setRepository(repository);
}


useEffect(()=>{getRepository(query)}, [flag])
  
  return (
    <main>

      <SearchBar 
      setQuery={setQuery}
      flag = {flag}
      setFlag={setFlag}
      
      ></SearchBar>
      {repository && <RepositorySection repository={repository}/>}
    
    </main>
    

  )
}

export default App
