import styles from './repositorySection.module.css'

import type { Repository } from '../../types/Repository'
import RepositoryStatsCards from '../repositoryStatsCard/RepositoryStatsCard'
import CommitStats from '../commitStats/CommitStats'
import LanguageStats from '../languageStats/LanguageStats'


interface RepositoryProps {
    repository: Repository
}

export default function RepositorySection({repository}: RepositoryProps){
    const cardsInfo = [
        {type: "Stars", value: repository.stargazers_count},
        {type: "Forks", value: repository.forks_count},
        {type: "Watchers", value: repository.watchers_count}] 
    
    return (
    
    <section className={styles.section}>

    <div className={styles.repositoryNameDiv}>

        
        <i className={`ri-github-fill ${styles.gitHubLogo}`}></i>
        <h2 className={styles.h2}>{repository.name}</h2>
    </div>

    <div className={styles.sectionCards}>
        {cardsInfo.map(type => 
        <RepositoryStatsCards 
        key={type.type}
        type = {type.type}
        count = {type.value}
        
        />
    )}
    </div>
    
    <div className={styles.sectionGraphics}>
        <CommitStats fullName = {repository.full_name}/>
        <LanguageStats fullName={repository.full_name}/>
    </div>
    
    
    </section>)
}