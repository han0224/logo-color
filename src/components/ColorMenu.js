import { Colors } from "assets/Colors";
import { store } from "contexts/StoreContext";
import { useContext } from "react";
import styles from "styles/ColorMenu.module.css";
import filterColor from "utils/FilterColor";

const ColorMenu = ({ setViewData }) => {
  const { checkItem, setCheckItem } = useContext(store);

  const checkedItemHandler = (event, id) => {
    console.log(checkItem.size, Object.keys(Colors).length);
    const isChecked = event.currentTarget.checked;
    if (isChecked) {
      checkItem.add(id);
      setCheckItem(checkItem);
    } else if (!isChecked && checkItem.has(id)) {
      checkItem.delete(id);
      setCheckItem(checkItem);
    }
    setViewData(filterColor(checkItem));
  };

  const allCheck = () => {
    if (Object.keys(Colors).length === checkItem.size) {
      setCheckItem(new Set());
      return;
    }
    Object.entries(Colors).forEach((v) => {
      checkItem.add(v[1]);
    });
    setCheckItem(checkItem);
    setViewData(filterColor(checkItem));
  };

  return (
    <div className={styles.menus}>
      <div className={styles.title}>
        <h1>Logo Color</h1>
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          <input
            type={"checkbox"}
            id={"allCheck"}
            onChange={allCheck}
            checked={checkItem.size === Object.keys(Colors).length}
          />
          <label htmlFor="allCheck">전체 선택</label>
        </div>

        {Object.entries(Colors).map((v, i) => (
          <div className={styles.item} key={i}>
            <input
              type={"checkbox"}
              name={"colorSelect"}
              id={v[1]}
              onChange={(e) => checkedItemHandler(e, v[1])}
              checked={checkItem.has(v[1])}
            />
            <label htmlFor={v[1]}>{v[1]}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorMenu;
