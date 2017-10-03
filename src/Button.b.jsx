import React from 'react';
import styles from './Button.css';

const onClick = () => alert('clicked');

export default () => (
  <button onClick={onClick} className={styles.button}>
    Button
  </button>
);
