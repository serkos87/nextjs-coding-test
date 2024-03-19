import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/todos">Todos</Link>
      <Link href="/about">About</Link>
      <Link href="/help">Help</Link>
    </nav>
  );
}
