import { useEffect, useState } from 'react';
import styles from './commitStats.module.css'

import type { CommitStatsProps } from '../../types/CommitStatsProps';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



export default function CommitStats({ fullName }: CommitStatsProps) {

    const [commitsLast4Weeks, setCommitsLast4Weeks] = useState([])

    async function getCommitActivity(fullName: string) {
        //https://docs.github.com/pt/rest/metrics/statistics?apiVersion=2022-11-28#get-the-weekly-commit-count
        const url = `https://api.github.com/repos/${fullName}/stats/participation`;
        const response = await fetch(url);
        const data = await response.json();

        const last4 = data.all.slice(-4).map((commits:number, index:number) => ({week: 'Semana ' + (index+1), commits}))
        setCommitsLast4Weeks(last4)

    }

    useEffect(() => {getCommitActivity(fullName) }, [fullName])

    return (
    
    <div className={styles.card}>


        
        <h2 className={styles.h2}>Commit Stats</h2>
       <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={commitsLast4Weeks}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="week" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="commits" fill="var(--middle2)"  />
    </BarChart>



      </div>)
}