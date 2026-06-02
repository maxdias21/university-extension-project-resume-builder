import styles from './HeaderDetail.module.css';

function HeaderDetail({ name }) {
  return (
    <div class={styles.header}>
      <p>{name.value}</p>
      <img className={styles.img} src="https://picsum.photos/200/300" />
    </div>
  );
}

export default HeaderDetail;
