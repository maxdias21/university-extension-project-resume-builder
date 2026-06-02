import { useState } from 'react';

import styles from './App.module.css';

import Resume from './components/Resume';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

import Input from './ui/Input';
import Label from './ui/Label';
import FormField from './components/FormField';

function App() {
  const [name, setName] = useState({ value: '', maxLength: 70, minLength: 2 });
  const [email, setEmail] = useState({
    name: 'email',
    value: '',
    maxLength: 50,
    minLength: 2,
  });
  const [phone, setPhone] = useState({
    value: '',
    maxLength: 20,
    minLength: 20,
  });
  const [address, setAddress] = useState({
    value: '',
    maxLength: 100,
    minLength: 10,
  });
  const [skills, setSkills] = useState([]);
  const [ability, setAbility] = useState('');
  const [level, setLevel] = useState('1');
  const [showTips, setShowTips] = useState(false);

  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState('');
  const [levelLanguage, setLevelLanguage] = useState('1');

  function handleChangeLanguages() {
    setLanguages((prevState) => [
      ...prevState,
      { language: language, level: levelLanguage },
    ]);

    setLanguage('');
    setLevelLanguage('1');
  }

  function handleChangeSkills() {
    setSkills((prevState) => [
      ...prevState,
      { ability: ability, level: level },
    ]);

    setAbility('');
    setLevel('1');
  }

  function handleChange(e, setField) {
    const value = e.target.value;

    setField((prevState) => {
      if (value.length > prevState.maxLength) {
        return prevState;
      }

      return {
        ...prevState,
        value: value,
      };
    });
  }

  const isActive = ability.length > 2 && ability.length < 20;
  const isActiveLanguage = language.length > 2 && language.length < 20;

  return (
    <div class={styles.container}>
      <div class={styles.containerDetails}>
        <div class={styles.containerDetails}>
          <FormField
            id="name"
            name="Nome"
            value={name.value}
            handle={(e) => handleChange(e, setName)}
          />
          <FormField
            id="email"
            name="Email"
            value={email.value}
            handle={(e) => handleChange(e, setEmail)}
          />
          <FormField
            id="phone"
            name="Telefone"
            value={phone.value}
            handle={(e) => handleChange(e, setPhone)}
          />
          <FormField
            id="address"
            name="Endereço"
            value={address.value}
            handle={(e) => handleChange(e, setAddress)}
          />
          <hr />
          <div className={styles.abilityContent}>
            <FormField
              id="ability"
              name="Habilidade"
              value={ability}
              handle={(e) => setAbility(e.target.value)}
            />

            <div className={styles.wrapper}>
              <select value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="1">Iniciante</option>
                <option value="2">Conhecimento Básico</option>
                <option value="3">Intermediário</option>
                <option value="4">Avançado</option>
                <option value="5">Especialista</option>
              </select>

              <p className={styles.tips} onClick={() => setShowTips(!showTips)}>
                Mostrar dicas ⬇
              </p>
            </div>

            {showTips && (
              <div>
                <ul>
                  <li>
                    <strong>Letra maiúscula:</strong> Comece sempre cada
                    habilidade com a primeira letra maiúscula (ex: React,
                    Excel).
                  </li>
                  <li>
                    <strong>Foco na vaga:</strong> Coloque apenas as habilidades
                    que fazem sentido para o cargo que você quer.
                  </li>
                </ul>
              </div>
            )}

            <button
              className={`${isActive ? styles.enabled : styles.disabled} ${styles.button}`}
              onClick={handleChangeSkills}
            >
              Adicionar habilidade
            </button>
          </div>

          <hr />

          <div className={styles.abilityContent}>
            <FormField
              id="language"
              name="Idioma"
              value={language}
              handle={(e) => setLanguage(e.target.value)}
            />

            <div className={styles.wrapper}>
              <select
                value={levelLanguage}
                onChange={(e) => setLevelLanguage(e.target.value)}
              >
                <option value="1">Iniciante</option>
                <option value="2">Conhecimento Básico</option>
                <option value="3">Intermediário</option>
                <option value="4">Avançado</option>
                <option value="5">Especialista</option>
              </select>

              <p className={styles.tips} onClick={() => setShowTips(!showTips)}>
                Mostrar dicas ⬇
              </p>
            </div>

            {showTips && (
              <div>
                <ul>
                  <li>
                    <strong>Letra maiúscula:</strong> Comece sempre cada
                    habilidade com a primeira letra maiúscula (ex: React,
                    Excel).
                  </li>
                  <li>
                    <strong>Foco na vaga:</strong> Coloque apenas as habilidades
                    que fazem sentido para o cargo que você quer.
                  </li>
                </ul>
              </div>
            )}

            <button
              className={`${isActiveLanguage ? styles.enabled : styles.disabled} ${styles.button}`}
              onClick={handleChangeLanguages}
            >
              Adicionar idioma
            </button>
          </div>
        </div>
      </div>

      <div class={styles.containerResume}>
        <Resume
          name={name}
          email={email}
          phone={phone}
          address={address}
          skills={skills}
          languages={languages}
        />
      </div>
    </div>
  );
}

export default App;
