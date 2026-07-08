import { forwardRef } from 'react';

import styles from './Resume.module.css';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Resume = forwardRef(
  ({
    name,
    email,
    phone,
    address,
    skills,
    languages,
    dateOfBirth,
    site,
    marital,
    nationality,
    linkedin,
    academics,
    experiences,
  }) => {
    return (
      <div className={styles.page}>
        <LeftSide
          name={name}
          email={email}
          phone={phone}
          address={address}
          skills={skills}
          languages={languages}
          dateOfBirth={dateOfBirth}
          site={site}
          linkedin={linkedin}
          marital={marital}
          nationality={nationality}
        />

        <RightSide academics={academics} experiences={experiences} />
      </div>
    );
  }
);

export default Resume;
