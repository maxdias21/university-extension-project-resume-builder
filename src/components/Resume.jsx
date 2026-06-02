import styles from './Resume.module.css';

import LeftSide from './LeftSide';

function Resume({ name, email, phone, address, skills }) {
  return (
    <div class={styles.page}>
      <LeftSide
        name={name}
        email={email}
        phone={phone}
        address={address}
        skills={skills}
      />

      <div class={styles.right}>
        <p>Max Dias</p>
      </div>
    </div>
  );
}

export default Resume;
