
import type { Repository } from "../../types/Repository"
import styles from './repositoryStatsCard.module.css'

import type { RepositoryCardProps } from "../../types/RepositoryCardProps"


export default function RepositoryStatsCards({ type, count }: RepositoryCardProps) {
    return (
        <div className="card">
            <h3>{type}</h3>
            <p>{count}</p>
        </div>
    )
}