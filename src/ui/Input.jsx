import styles from './Input.module.css';

function Input({ value, handle }) {
  return <input className={styles.input} value={value} onChange={handle} />;
}

export default Input;
