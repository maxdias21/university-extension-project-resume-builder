import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import styles from './Accordion.module.css';

function Accordion({ children, title }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.content} onClick={() => setOpen(!open)}>
        <span className={styles.title}>{title}</span>
        <span className={styles.icon}>
          {open ? (
            <FontAwesomeIcon icon={faMinus} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </span>
      </div>
      {open && children}
    </>
  );
}

export default Accordion;
