import { useChallengeContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useChallengeContext()

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/eduardoarad.png" alt="Eduardo Araujo" />
            <div>
                <strong>Eduardo Araújo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}