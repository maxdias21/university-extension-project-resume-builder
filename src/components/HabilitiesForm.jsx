import FormField from './FormField';

import styles from './Form.module.css';

import { useState } from 'react';

function HabilitiesForm({ value, handleField, handleButton }) {
  const [showTips, setShowTips] = useState(false);

  const isActive = value.length > 2 && value.length < 20;

  return (
    <div className={styles.content}>
      <FormField
        id="ability"
        name="ability"
        placeholder="Habilidade"
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
              <strong>Letra maiúscula:</strong> Comece sempre cada habilidade
              com a primeira letra maiúscula (ex: React, Excel).
            </p>

            <p>
              <strong>Foco na vaga:</strong> Coloque apenas as habilidades que
              fazem sentido para o cargo que você quer.
            </p>
          </div>
        )}
      </div>

      <button
        className={`${isActive ? styles.enabled : styles.disabled} ${
          styles.button
        }`}
        onClick={handleButton}
      >
        Adicionar habilidade
      </button>
    </div>
  );
}

export default HabilitiesForm;
