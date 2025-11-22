
import styles from './repositoryStatsCard.module.css'

import type { RepositoryCardProps } from "../../types/RepositoryCardProps"


export default function RepositoryStatsCards({ type, count }: RepositoryCardProps) {
    return (
        <div className={styles.card}>
            <h3 className={styles.type}>{type}: </h3>
            <p className={styles.count}>{count}</p>
        </div>
    )
}