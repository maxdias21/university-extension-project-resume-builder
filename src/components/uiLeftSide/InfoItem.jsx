import styles from './InfoItem.module.css';

function InfoItem({ items }) {
  return (
    <div>
      {items.length > 0 &&
        items.map((item, index) => (
          <div key={index} className={styles.abilities}>
            <p>{item.value}</p>
          </div>
        ))}
    </div>
  );
}

export default InfoItem;
