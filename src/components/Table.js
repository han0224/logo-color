import styles from "styles/Table.module.css";
import ColorList from "./ColorList";

const Table = ({ data }) => {
  return (
    <div className={styles.table}>
      {data.map((item) => (
        <div
          key={item.id}
          className={styles.card}
          style={{ backgroundColor: `${item.list[0].code}` }}
        >
          <div className={styles.content}>
            <div className={styles.title}>
              <div className={styles.image}>
                <img src={item.image}></img>
              </div>
              <h1>{item.name}</h1>
            </div>
            <p>{item.describe}</p>
            <ColorList color={item.list} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
