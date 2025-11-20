import { useEffect, useState } from 'react'
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
        <form>
            <label htmlFor="textSearch">Pesquisar Repositórios </label>
            <input type="text" onChange={updateSearch} />
            <button onClick={(e)=> {e.preventDefault(); updateFlag()}}>Pesquisar</button>
        </form>)
}