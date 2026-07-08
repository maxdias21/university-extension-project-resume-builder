import styles from './Input.module.css';

function Input({ value, handle, id, placeholderTips }) {
  return (
    <input
      placeholder={placeholderTips}
      id={id}
      className={styles.input}
      value={value}
      onChange={handle}
    />
  );
}

export default Input;
