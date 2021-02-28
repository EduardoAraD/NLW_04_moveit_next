import { useChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
    const { challengesCompleted } = useChallengeContext();
    
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}