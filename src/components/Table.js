import styles from "styles/Table.module.css";
import ColorList from "./ColorList";
const Table = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.table}>
      {data.map((item) => (
        <div
          key={item.id}
          className={styles.card}
          style={{ background: `${item.list[0].code}` }}
        >
          <div className={styles.content}>
            <h1>{item.name}</h1>
            <p>{item.describe}</p>
            <ColorList color={item.list} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
