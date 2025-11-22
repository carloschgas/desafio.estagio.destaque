import styles from './row.module.css'
import type { RowProps } from "../../../types/RowProps";

export default function Row({languageName, value, maxValue} : RowProps){
    const widthPercent = (value/maxValue)*100;

    return (
        <div className={styles.rowCard}>

        <span className={styles.languageInfo}>{languageName}: {value.toFixed(2)}%</span>
        <div className={styles.row}
        style={{width:`${widthPercent}%`}}
        >
        </div>
        
        </div>
        
    )
}