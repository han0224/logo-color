import styles from "styles/ColorList.module.css";
const ColorList = ({ color }) => {
  const clickCopy = (text) => {
    console.log("!!!", text);
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => alert("good"))
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
    </div>
  );
};

export default ColorList;
