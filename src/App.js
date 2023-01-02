import SearchBar from "components/SearchBar";
import { useEffect, useState } from "react";
import Table from "components/Table";
import { Data } from "assets/Data";
import ColorMenu from "components/ColorMenu";
import styles from "App.module.css";
import Toast from "components/Toast";
import search from "utils/search";
import { store } from "contexts/StoreContext";

function App() {
  const [query, setQuery] = useState("");
  const [viewData, setViewData] = useState(Data);
  const [checkItem, setCheckItem] = useState(new Set());
  const [toast, setToast] = useState({ view: false, msg: "copy" });

  useEffect(() => {
    console.log("!!", toast.view);
    if (toast.view) {
      setTimeout(() => {
        setToast({ view: false, msg: toast.msg });
      }, 1000);
    }
  }, [toast]);

  return (
    <store.Provider value={{ toast, setToast, checkItem, setCheckItem }}>
      <div className={styles.app}>
        <div className={styles.left}>
          <ColorMenu setViewData={setViewData} />
        </div>
        <div className={styles.right}>
          <SearchBar setQuery={setQuery} />
          <Table data={search(viewData, query)} />
        </div>
        <Toast />
      </div>
    </store.Provider>
  );
}

export default App;
