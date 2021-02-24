import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/anabrtorres.png" alt="Ana Torres" />
      <div>
        <strong>Ana Torres</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level
        </p>
      </div>
    </div>
  );
}
