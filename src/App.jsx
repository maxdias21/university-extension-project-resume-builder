import { useRef, useState } from 'react';

import styles from './App.module.css';

import Resume from './components/Resume';
import Accordion from './components/Accordion';
import PersonDetailsForm from './components/PersonDetailsForm';
import HabilitiesForm from './components/HabilitiesForm';
import LanguagesForm from './components/LanguagesForm';
import AcademicForm from './components/AcademicForm';
import ExperienceForm from './components/ExperienceForm';

import generatePDF, { Resolution } from 'react-to-pdf';

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
    minLength: 7,
  });

  const [address, setAddress] = useState({
    value: '',
    maxLength: 100,
    minLength: 5,
  });
  const [dateOfBirth, setDateOfBirth] = useState({
    value: '',
    maxLength: 100,
    minLength: 2,
  });
  const [site, setSite] = useState({
    value: '',
    maxLength: 100,
    minLength: 2,
  });
  const [linkedin, setLinkedin] = useState({
    value: '',
    maxLength: 100,
    minLength: 2,
  });

  const [skills, setSkills] = useState([]);
  const [ability, setAbility] = useState('');

  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState('');

  const [experience, setExperience] = useState({
    position: '',
    company: '',
    city: '',
    startDate: '',
    endDate: '',
    isValid: false,
  });

  const [experiences, setExperiences] = useState([]);

  const [academic, setAcademic] = useState({
    academic: '',
    institution: '',
    city: '',
    startDate: '',
    endDate: '',
    isValid: false,
  });
  const [academics, setAcademics] = useState([]);

  function handleFields(e, set, name) {
    const value = e.target.value;

    set((prevState) => {
      const newState = {
        ...prevState,
        [name]: value,
      };

      const isValid = Object.entries(newState)
        .filter(([key]) => key !== 'isValid')
        .every(([, value]) => value.trim() !== '');

      return {
        ...newState,
        isValid,
      };
    });
  }

  function handleChange(setArray, setField, value) {
    setArray((prevState) => [...prevState, { value }]);

    setField('');
  }

  function handleField(e, set) {
    const value = e.target.value;

    set((prevState) => ({ ...prevState, value: value }));
  }

  const targetRef = useRef();

  return (
    <div className={styles.container}>
      <div className={styles.containerDetails}>
        <Accordion title="Detalhes Pessoais">
          <PersonDetailsForm
            name={{
              value: name.value,
              handle: (e) => handleField(e, setName),
            }}
            email={{
              value: email.value,
              handle: (e) => handleField(e, setEmail),
            }}
            phone={{
              value: phone.value,
              handle: (e) => handleField(e, setPhone),
            }}
            address={{
              value: address.value,
              handle: (e) => handleField(e, setAddress),
            }}
            dateOfBirth={{
              value: dateOfBirth.value,
              handle: (e) => handleField(e, setDateOfBirth),
            }}
            site={{
              value: site.value,
              handle: (e) => handleField(e, setSite),
            }}
            linkedin={{
              value: linkedin.value,
              handle: (e) => handleField(e, setLinkedin),
            }}
          />
        </Accordion>

        <hr />

        <Accordion title="Habilidades">
          <HabilitiesForm
            value={ability}
            handleField={(e) => setAbility(e.target.value)}
            handleButton={() => handleChange(setSkills, setAbility, ability)}
          />
        </Accordion>
        <hr />

        <Accordion title="Idiomas">
          <LanguagesForm
            languages={languages}
            value={language}
            handleField={(e) => setLanguage(e.target.value)}
            handleButton={() =>
              handleChange(setLanguages, setLanguage, language)
            }
          />
        </Accordion>

        <hr />

        <Accordion title="Experiências">
          <ExperienceForm
            value={experience}
            set={setExperience}
            handleField={handleFields}
            handleButton={() =>
              handleChange(setExperiences, setExperience, experience)
            }
            isValid={experience.isValid}
          />
        </Accordion>
        <hr />

        <Accordion title="Formação">
          <AcademicForm
            value={academic}
            set={setAcademic}
            handleField={handleFields}
            handleButton={() =>
              handleChange(setAcademics, setAcademic, academic)
            }
            isValid={academic?.isValid}
          />
        </Accordion>
      </div>

      <button
        onClick={() =>
          generatePDF(targetRef, {
            filename: 'Curriculo.pdf',
            resolution: Resolution.HIGH,
          })
        }
      >
        Gerar PDF
      </button>
      <div className={styles.containerResume} ref={targetRef}>
        <Resume
          name={name}
          email={email}
          phone={phone}
          address={address}
          skills={skills}
          languages={languages}
          dateOfBirth={dateOfBirth}
          site={site}
          linkedin={linkedin}
          academics={academics}
          experiences={experiences}
        />
      </div>
    </div>
  );
}

export default App;
