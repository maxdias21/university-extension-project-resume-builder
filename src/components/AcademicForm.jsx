import FormField from './FormField';
import styles from './Form.module.css';
import { useState } from 'react';

function AcademicForm({ value, set, handleField, handleButton, isValid }) {
  const [showTips, setShowTips] = useState(false);

  return (
    <div className={styles.content}>
      <FormField
        id="academic"
        name="academic"
        placeholder="Formação"
        placeholderTips="Ex: Bacharelado em Ciência da Computação"
        value={value.academic}
        handle={(e) => handleField(e, set, 'academic')}
        tips="Especifique o grau (Bacharelado, Tecnólogo, Técnico, Mestrado) seguido pelo nome do curso."
      />

      <FormField
        id="institution"
        name="institution"
        placeholder="Instituição"
        placeholderTips="Ex: Universidade de São Paulo (USP)"
        value={value.institution}
        handle={(e) => handleField(e, set, 'institution')}
        tips="Informe o nome completo da instituição de ensino."
      />

      <FormField
        id="city"
        name="city"
        placeholder="Cidade"
        placeholderTips="Ex: São Paulo - SP"
        value={value.city}
        handle={(e) => handleField(e, set, 'city')}
      />

      <FormField
        id="startDate"
        name="startDate"
        placeholder="Data de início"
        placeholderTips="Ex: Fev/2019 ou 02/2019"
        handle={(e) => handleField(e, set, 'startDate')}
        value={value.startDate}
        tips="Para currículos, inserir apenas o mês e o ano é o formato ideal."
      />

      <FormField
        id="endDate"
        name="endDate"
        placeholder="Data de conclusão"
        placeholderTips="Ex: Dez/2023 ou 12/2023"
        handle={(e) => handleField(e, set, 'endDate')}
        value={value.endDate}
        tips="Se ainda estiver cursando, coloque a data prevista para a sua formatura."
      />

      <div className={styles.wrapper}>
        <p className={styles.tips} onClick={() => setShowTips(!showTips)}>
          Mostrar dicas ⬇
        </p>

        {showTips && (
          <div>
            <p>
              <strong>Ordem cronológica inversa:</strong> Comece sempre pela sua
              formação mais recente (ex: Pós-graduação primeiro, depois
              Graduação).
            </p>

            <p>
              <strong>Seja objetivo:</strong> Se você possui ensino superior
              completo ou em andamento, não é necessário incluir o ensino médio,
              a menos que tenha sido um ensino técnico profissionalizante
              relevante para a vaga.
            </p>
          </div>
        )}
      </div>

      <button
        className={`${isValid ? styles.enabled : styles.disabled} ${
          styles.button
        }`}
        onClick={handleButton}
      >
        Adicionar formação
      </button>
    </div>
  );
}

export default AcademicForm;
