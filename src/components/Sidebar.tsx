import Link from 'next/link';
import { FiAward, FiHome, FiLogOut } from 'react-icons/fi';
import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
  return (
    <div className={styles.container}>
      <img src="logo/timeup-blue.png" alt="timeup" />
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
      <div className={styles.logOut}>
        <Link href="/">
          <FiLogOut size={28} />
        </Link>
      </div>
    </div>
  );
}
