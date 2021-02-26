import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompletedChalenges.module.css';

import { FiAward } from 'react-icons/fi';

export function CompletedChalenges() {
  const { challengesCompleted } = useContext(ChallengeContext);

  return (
    <div className={styles.completedChalengesContainer}>
      <span>
        <FiAward size={16} />
        Desafios completos
      </span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
