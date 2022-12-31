import { store } from "contexts/StoreContext";
import { useContext } from "react";
import styles from "styles/Toast.module.css";

const Toast = () => {
  const { toast } = useContext(store);

  return (
    <div className={styles.toast} style={{ opacity: toast.view ? 1 : 0 }}>
      <div className={styles.message}>{toast.msg}</div>
    </div>
  );
};

export default Toast;
