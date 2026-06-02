import styles from './PersonDetails.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PersonDetails({ field, icon }) {
  return (
    <p class={styles.content}>
      <FontAwesomeIcon className={styles.img} icon={icon} />
      <p className={styles.text}>{field.value}</p>
    </p>
  );
}

export default PersonDetails;
