'use client';

import Link from 'next/link';
import { Modal } from '../Modal/modal';
import styles from './home.module.css';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Link href='/restaurants'>All restaurants</Link>
      <Modal>
        <div className={styles.modalOverlay}>
          <h3 className={styles.modalHeader}>Modal is visible</h3>
        </div>
      </Modal>
    </div>
  );
};