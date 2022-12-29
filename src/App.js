import SearchBar from "./components/SearchBar";
import { useState } from "react";
import Table from "components/Table";
import { Data } from "assets/Data";
import ColorMenu from "components/ColorMenu";
import styles from "App.module.css";

function App() {
  const [query, setQuery] = useState("");
  const [viewData, setViewData] = useState(Data);
  const [checkItem, setCheckItem] = useState(new Set());

  const search = (data) => {
    return data.filter((item) => item.name.toLowerCase().includes(query));
  };
  const filterColor = () => {
    if (checkItem.size === 0) {
      setViewData(Data);
      return;
    }
    const tmp = [];
    for (let item of Data) {
      if (item.list.some((v) => checkItem.has(v.color))) {
        tmp.push(item);
      }
    }
    setViewData(tmp);
  };

  const checkedItemHandler = (event, id) => {
    const isChecked = event.currentTarget.checked;
    if (isChecked) {
      checkItem.add(id);
      setCheckItem(checkItem);
    } else if (!isChecked && checkItem.has(id)) {
      checkItem.delete(id);
      setCheckItem(checkItem);
    }
    console.log(checkItem);
    filterColor();
  };

  return (
    <div className={styles.app}>
      <div className={styles.left}>
        <ColorMenu checkedItemHandler={checkedItemHandler} />
      </div>
      <div className={styles.right}>
        <SearchBar setQuery={setQuery} />
        <Table data={search(viewData)} />
      </div>
    </div>
  );
}

export default App;
