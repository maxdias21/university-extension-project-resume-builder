import Input from '../ui/Input';
import Label from '../ui/Label';

import styles from './FormField.module.css';

function FormField({ id, name, value, handle, placeholder }) {
  return (
    <div className={styles.form}>
      <Label id={id}>{placeholder}</Label>
      <Input id={id} name={name} value={value} handle={handle} />
    </div>
  );
}

export default FormField;
