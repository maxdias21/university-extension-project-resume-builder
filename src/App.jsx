import { useState } from 'react';

import styles from './App.module.css';

import Resume from './components/Resume';
import Accordion from './components/Accordion';
import PersonDetailsForm from './components/PersonDetailsForm';
import HabilitiesForm from './components/HabilitiesForm';
import LanguagesForm from './components/LanguagesForm';

function App() {
  const [name, setName] = useState({
    value: '',
    maxLength: 70,
    minLength: 2,
  });

  const [email, setEmail] = useState({
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

  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState('');

  function handleChangeLanguages() {
    setLanguages((prevState) => [...prevState, { value: language }]);

    setLanguage('');
  }

  function handleChangeSkills() {
    setSkills((prevState) => [...prevState, { value: ability }]);

    setAbility('');
  }

  function handleChange(e, setField) {
    const value = e.target.value;

    setField((prevState) => {
      if (value.length > prevState.maxLength) {
        return prevState;
      }

      return {
        ...prevState,
        value,
      };
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerDetails}>
        <Accordion title="Detalhes Pessoais">
          <PersonDetailsForm
            name={{
              value: name.value,
              handle: (e) => handleChange(e, setName),
            }}
            email={{
              value: email.value,
              handle: (e) => handleChange(e, setEmail),
            }}
            phone={{
              value: phone.value,
              handle: (e) => handleChange(e, setPhone),
            }}
            address={{
              value: address.value,
              handle: (e) => handleChange(e, setAddress),
            }}
          />
        </Accordion>

        <hr />

        <Accordion title="Habilidades">
          <HabilitiesForm
            value={ability}
            handleField={(e) => setAbility(e.target.value)}
            handleButton={handleChangeSkills}
          />
        </Accordion>
        <hr />

        <Accordion title="Idiomas">
          <LanguagesForm
            languages={languages}
            value={language}
            handleField={(e) => setLanguage(e.target.value)}
            handleButton={handleChangeLanguages}
          />
        </Accordion>
      </div>

      <div className={styles.containerResume}>
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
