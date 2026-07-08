import Input from '../ui/Input';
import Label from '../ui/Label';

import styles from './FormField.module.css';

function FormField({
  id,
  name,
  value,
  handle,
  placeholder,
  placeholderTips,
  tips,
}) {
  return (
    <div className={styles.form}>
      <Label id={id}>{placeholder}</Label>
      <Input
        placeholderTips={placeholderTips}
        id={id}
        name={name}
        value={value}
        handle={handle}
      />
      <p className={styles.tips}>{tips}</p>
    </div>
  );
}

export default FormField;
