import React from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.App}>
      <Logo width={48} height={48} />
      <h3>Easy Chat</h3>
    </div>
  );
}
