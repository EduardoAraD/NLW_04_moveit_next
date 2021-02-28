import { useCountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const {
        minutes,
        secunds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useCountdownContext()

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secundLeft, secundRigth] = String(secunds).padStart(2, '0').split('');

    return (
        <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRigth}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secundLeft}</span>
                <span>{secundRigth}</span>
            </div>
        </div>

        { hasFinished ? (
            <button
                disabled
                className={styles.countdownButton}
            >
                Ciclo encerrado
            </button>
        ) : (
            <>
            { isActive ? (
                <button
                    type="button"
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}
                >
                    Abandonar ciclo
                </button>
            ): (
                <button
                    type="button"
                    className={styles.countdownButton}
                    onClick={startCountdown}
                >
                    Iniciar um ciclo
                </button>
            )}
            </>
        )}

        
        </div>
    )
}