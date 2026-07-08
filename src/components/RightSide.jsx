import styles from './RightSide.module.css';

function RightSide({ academics, experiences }) {
  return (
    <div className={styles.right}>
      {academics.length > 0 && (
        <>
          <h1 className={styles.h2}>Formação</h1>
          <hr style={{ marginBottom: '10px', marginTop: '10px' }} />
          {academics.map((item, index) => (
            <div key={index} className={styles.container}>
              <div className={styles.content}>
                <p>{item?.value?.academic}</p>
                <div className={styles.date}>
                  <span>{item?.value?.startDate}</span>
                  <span>{item?.value?.endDate}</span>
                </div>
              </div>
              <p>{item?.value?.institution}</p>
            </div>
          ))}
        </>
      )}

      {experiences.length > 0 && (
        <>
          <h1 className={styles.h2}>Experiência</h1>
          <hr style={{ marginBottom: '10px', marginTop: '10px' }} />
          {experiences.map((item, index) => (
            <div key={index} className={styles.container}>
              <div className={styles.content}>
                <p>{item?.value?.position}</p>
                <div className={styles.date}>
                  <span>{item?.value?.startDate}</span>
                  <span>{item?.value?.endDate}</span>
                </div>
              </div>
              <p>{item?.value?.company}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default RightSide;
