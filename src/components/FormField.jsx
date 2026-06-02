import Input from '../ui/Input';
import Label from '../ui/Label';

import styles from './FormField.module.css';

function FormField({ id , name, value, handle  }) {
  return (
    <div className={styles.form}>
      <Label name={name} />
      <Input value={value} handle={handle} />
    </div>
  );
}

export default FormField;
