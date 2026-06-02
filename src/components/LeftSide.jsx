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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LeftSide({ name, email, phone, address, skills, languages }) {
  return (
    <div class={styles.left}>
      <HeaderDetail name={name} />
      <div class={styles.wrapper}>
        <h3>Detalhes pessoais</h3>
        <hr />

        <div className={styles.contentPerson}>
          <PersonDetails field={name} icon={faUser} />
          <PersonDetails field={email} icon={faEnvelope} />
          <PersonDetails field={phone} icon={faPhone} />
          <PersonDetails field={address} icon={faLocationDot} />
        </div>
      </div>

      <div class={styles.wrapper}>
        <h3>Habilidades</h3>
        <hr />

        {skills.length > 0 &&
          skills.map((skill, index) => (
            <div key={index} className={styles.abilities}>
              <p>{skill.ability}</p>

              <div className={styles.dot}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faCircle}
                    style={{
                      color: Number(skill.level) >= item ? 'blue' : 'lightgrey',
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>

      <div class={styles.wrapper}>
        <h3>Idiomas</h3>
        <hr />

        {languages.length > 0 &&
          languages.map((skill, index) => (
            <div key={index} className={styles.abilities}>
              <p>{skill.language}</p>

              <div className={styles.dot}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faCircle}
                    style={{
                      color: Number(skill.level) >= item ? 'blue' : 'lightgrey',
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
      <hr />
    </div>
  );
}

export default LeftSide;
