import FormField from './FormField';

import styles from './Form.module.css';

import { useState } from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LanguagesForm({ value, handleField, handleButton, languages }) {
  const [showTips, setShowTips] = useState(false);

  const isActive = value.length > 2 && value.length < 20;

  return (
    <div className={styles.content}>
      <FormField
        id="language"
        name="language"
        placeholder="Idiomas"
        value={value}
        handle={handleField}
      />

      <div className={styles.wrapper}>
        <p className={styles.tips} onClick={() => setShowTips(!showTips)}>
          Mostrar dicas ⬇
        </p>

        {showTips && (
          <div>
            <p>
              Em um currículo, a forma mais comum e direta é:
              <strong> Inglês – Avançado</strong>.
            </p>

            <p>
              Se quiser ser mais específico, você pode indicar as habilidades:
            </p>

            <p>
              <strong>
                Inglês – Avançado (leitura, escrita e conversação)
              </strong>
            </p>

            <p>
              <strong>Inglês – Avançado (nível B2/C1)</strong>, se conhecer seu
              nível pelo CEFR.
            </p>

            <p>
              <strong>Inglês – Fluente</strong>, apenas se realmente consegue se
              comunicar com facilidade em contextos profissionais e do dia a
              dia.
            </p>
          </div>
        )}

        <div className={styles.languageListContainer}>
          {languages.map((item, index) => (
            <div className={styles.languageList} key={index}>
              <div>{item.value}</div>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          ))}
        </div>

        <button
          className={`${
            isActive ? styles.enabled : styles.disabled
          } ${styles.button}`}
          onClick={handleButton}
        >
          Adicionar idioma
        </button>
      </div>
    </div>
  );
}

export default LanguagesForm;
