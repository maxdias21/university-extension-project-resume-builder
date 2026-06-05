import styles from './Input.module.css';

function Input({ value, handle, id }) {
  return (
    <input id={id} className={styles.input} value={value} onChange={handle} />
  );
}

export default Input;
