import styles from './Resume.module.css';

import LeftSide from './LeftSide';

function Resume({ name, email, phone, address, skills, languages }) {
  return (
    <div class={styles.page}>
      <LeftSide
        name={name}
        email={email}
        phone={phone}
        address={address}
        skills={skills}
        languages={languages}
      />

      <div class={styles.right}>
        <p>Max Dias</p>
      </div>
    </div>
  );
}

export default Resume;
