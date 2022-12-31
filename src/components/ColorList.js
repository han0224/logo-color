import styles from "styles/ColorList.module.css";
import { useContext } from "react";
import { store } from "contexts/StoreContext";
const ColorList = ({ color }) => {
  const { setToast } = useContext(store);

  const clickCopy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setToast({ view: true, msg: "복사되었습니다." });
        })
        .catch(() => alert("nope"));
    } else {
      alert("nono");
    }
  };
  return (
    <div className={styles.colors}>
      {color.map((v, i) => (
        <button
          key={i}
          onClick={() => clickCopy(v.code)}
          className={styles.color}
          style={{ background: `${v.code}` }}
        ></button>
      ))}
      {/* <div className={styles.alert}>복사되었습니다.</div> */}
    </div>
  );
};

export default ColorList;
