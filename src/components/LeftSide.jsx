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
      <div class={styles.wrapper}>
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

      <div class={styles.wrapper}>
        {skills.length > 0 && (
          <>
            <h3>Habilidades</h3>
            <hr />
            <InfoItem items={skills} />
          </>
        )}
      </div>

      <div class={styles.wrapper}>
        {languages.length > 0 && (
          <>
            <h3>Idiomas</h3>
            <hr />
            <InfoItem items={languages} />
          </>
        )}
      </div>
      <hr />
    </div>
  );
}

export default LeftSide;
