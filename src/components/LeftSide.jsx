import {
  faEnvelope,
  faPhone,
  faUser,
  faLocationDot,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

import styles from './LeftSide.module.css';

import HeaderDetail from './uiLeftSide/HeaderDetail';
import PersonDetails from './uiLeftSide/PersonDetails';
import InfoItem from './uiLeftSide/InfoItem';

function LeftSide({ name, email, phone, address, skills, languages }) {
  return (
    <div class={styles.left}>
      <HeaderDetail name={name} />
      {(name.value.length > 0 ||
        email.value.length > 0 ||
        phone.value.length > 0 ||
        address.value.length > 0) && (
        <div className={styles.wrapper}>
          <h3>Detalhes pessoais</h3>
          <hr />

          <div className={styles.contentPerson}>
            {name.value.length > 0 && (
              <PersonDetails field={name} icon={faUser} />
            )}
            {email.value.length > 0 && (
              <PersonDetails field={email} icon={faEnvelope} />
            )}
            {phone.value.length > 0 && (
              <PersonDetails field={phone} icon={faPhone} />
            )}
            {address.value.length > 0 && (
              <PersonDetails field={address} icon={faLocationDot} />
            )}
          </div>
        </div>
      )}

      {skills.length > 0 && (
        <div className={styles.wrapper}>
          <>
            <h3>Habilidades</h3>
            <hr />
            <InfoItem items={skills} />
          </>
        </div>
      )}
      {languages.length > 0 && (
        <>
          <div className={styles.wrapper}>
            <h3>Idiomas</h3>
            <hr />
            <InfoItem items={languages} />
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default LeftSide;
