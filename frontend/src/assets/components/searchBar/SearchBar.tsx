import styles from './searchBar.module.css'
import type { SearchBarProps } from '../../types/SearchBarProps';


export default function searchBar({setQuery, flag, setFlag} : SearchBarProps){


    function updateSearch(e : React.ChangeEvent<HTMLInputElement>){
        const letter = e.target.value;
        setQuery(letter);
    }

    function updateFlag(){ //flag para chamar o useEffect
        setFlag(!flag)
    }

    
    return (
        <form className={styles.form}>
            <label className={styles.label} htmlFor="textSearch">Pesquisar Repositórios </label>
            <input className={styles.input} type="text" onChange={updateSearch} />
            <button className={styles.btn} onClick={(e)=> {e.preventDefault(); updateFlag()}}>Pesquisar</button>
        </form>)
}