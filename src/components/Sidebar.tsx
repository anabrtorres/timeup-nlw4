import { useContext } from 'react';
import { FiAward, FiHome } from 'react-icons/fi';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
  return (
    <div className={styles.container}>
      <img src="timeup-blue.png" alt="timeup" />
      <div className={styles.buttons}>
        <button type="button">
          <div></div>
          <FiHome size={32} />
        </button>
        <button type="button" disabled>
          <div></div>
          <FiAward size={32} />
        </button>
      </div>
    </div>
  );
}
