import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompletedChalenges.module.css';

export function CompletedChalenges() {
  const { challengesCompleted } = useContext(ChallengeContext);

  return (
    <div className={styles.completedChalengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
