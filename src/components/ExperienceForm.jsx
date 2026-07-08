import FormField from './FormField';
import styles from './Form.module.css';
import { useState } from 'react';

function ExperienceForm({ value, set, handleField, handleButton, isValid }) {
  const [showTips, setShowTips] = useState(false);

  return (
    <div className={styles.content}>
      <FormField
        id="position"
        name="position"
        placeholder="Função"
        placeholderTips="Ex: Desenvolvedor Front-end"
        value={value.position}
        handle={(e) => handleField(e, set, 'position')}
        tips="Utilize o nome do cargo oficial ou um título claro que resuma sua atuação."
      />

      <FormField
        id="company"
        name="company"
        placeholder="Empresa"
        placeholderTips="Ex: Tech Solutions S/A"
        value={value.company}
        handle={(e) => handleField(e, set, 'company')}
        tips="Informe apenas o nome fantasia da empresa."
      />

      <FormField
        id="city"
        name="city"
        placeholder="Cidade"
        placeholderTips="Ex: São Paulo - SP (Remoto)"
        value={value.city}
        handle={(e) => handleField(e, set, 'city')}
        tips="Se o trabalho for/foi em regime home office, você pode adicionar a palavra '(Remoto)' ao lado da cidade."
      />

      <FormField
        id="startDate"
        name="startDate"
        placeholder="Data de início"
        placeholderTips="Ex: Mar/2021 ou 03/2021"
        handle={(e) => handleField(e, set, 'startDate')}
        value={value.startDate}
        tips="Para currículos, inserir apenas o mês e o ano é o formato ideal."
      />

      <FormField
        id="endDate"
        name="endDate"
        placeholder="Data de conclusão"
        placeholderTips="Ex: Atual ou Dez/2023"
        handle={(e) => handleField(e, set, 'endDate')}
        value={value.endDate}
        tips="Escreva 'Atual' se você ainda estiver trabalhando nesta empresa."
      />

      <div className={styles.wrapper}>
        <p className={styles.tips} onClick={() => setShowTips(!showTips)}>
          Mostrar dicas ⬇
        </p>

        {showTips && (
          <div>
            <p>
              <strong>Ordem cronológica inversa:</strong> Assim como na
              formação, comece sempre pela sua experiência profissional mais
              recente ou a atual.
            </p>

            <p>
              <strong>Relevância:</strong> Se você tem uma carreira longa, foque
              nas experiências dos últimos 10 anos ou nas que fazem mais sentido
              para a vaga que você está buscando agora.
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
        Adicionar experiência
      </button>
    </div>
  );
}

export default ExperienceForm;
