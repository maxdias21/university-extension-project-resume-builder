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

  function handleChangeSkills() {
    setSkills((prevState) => [
      ...prevState,
      { ability: ability, level: level },
    ]);

    setAbility('');
    setLevel('');
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

  const isActive = ability.length > 4;

  return (
    <div class={styles.container}>
      <div class={styles.containerDetails}>
        <input value={name.value} onChange={(e) => handleChange(e, setName)} />

        <div class={styles.containerDetails}>
          <FormField />
        </div>

        <div class={styles.containerDetails}>
          <input
            value={phone.value}
            onChange={(e) => handleChange(e, setPhone)}
          />
        </div>
        <div class={styles.containerDetails}>
          <input
            value={address.value}
            onChange={(e) => handleChange(e, setAddress)}
          />
        </div>

        <h2>Habilidades</h2>
        <div className={styles.abilityContent}>
          <label>Habilidade</label>
          <input value={ability} onChange={(e) => setAbility(e.target.value)} />

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
                  habilidade com a primeira letra maiúscula (ex: React, Excel).
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
        <div></div>
      </div>

      <div class={styles.containerResume}>
        <Resume
          name={name}
          email={email}
          phone={phone}
          address={address}
          skills={skills}
        />
      </div>
    </div>
  );
}

export default App;
const x = 10;
