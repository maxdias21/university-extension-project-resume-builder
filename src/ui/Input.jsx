import styles from './Input.module.css';

function Input({ field, handle }) {
  return <input className={styles.input} value={field} onChange={handle} />;
}

export default Input;
