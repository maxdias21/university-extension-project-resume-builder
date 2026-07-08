import styles from './PersonDetails.module.css';

function PersonDetails({ field }) {
  return (
    <div className={styles.content}>
      <p className={styles.text}>{field.value}</p>
    </div>
  );
}

export default PersonDetails;
