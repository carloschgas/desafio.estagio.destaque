import { useEffect, useState } from 'react';
import type { LanguageStatsProps } from '../../types/LanguageStatsProps';
import styles from './languageStats.module.css'
import CustomActiveShapePieChart from '../PieChart/CustomActiveShapePieChart';




export default function LanguageStats({fullName}: LanguageStatsProps ){
    
    const [languagesData, setLanguages] = useState<{name:string, value:number}[]>([])

    function getPercent(data: Record<string, number>){

        let total = 0;


        for (const value of Object.values(data)){
            total += value;
        }


        const porcentagem = Object.entries(data).map(([name, value]) => ({
            name: name,
            value: (value/total)*100
        }));

        setLanguages(porcentagem);

        
    }



    async function getLanguages(fullName : string){
        //https://docs.github.com/pt/rest/repos/repos?apiVersion=2022-11-28#list-repository-languages
        
        const URL_API = `https://api.github.com/repos/${fullName}/languages`;
        const response = await fetch(URL_API);
        const data = await response.json();

        getPercent(data)

    }
    
    useEffect(() => {getLanguages(fullName)}, [fullName])

    return (<>
    <h2>Language Stats</h2>
    <CustomActiveShapePieChart data = {languagesData}></CustomActiveShapePieChart>
    
    </>)
}