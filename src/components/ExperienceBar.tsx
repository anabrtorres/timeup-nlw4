import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, eperienceToNextLevel } = useContext(
    ChallengeContext,
  );

  const percentToNextNevel =
    Math.round(currentExperience * 100) / eperienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextNevel}` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextNevel}` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{eperienceToNextLevel} xp</span>
    </header>
  );
}
