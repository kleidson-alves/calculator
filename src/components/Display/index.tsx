import React from "react";
import { useDisplay } from "../../hooks/useDisplay";
import styles from "./styles.module.scss";

const Display: React.FC = () => {
  const { currentValue, previuslyValue } = useDisplay();
  return (
    <div className={styles.container}>
      {previuslyValue.trim() !== "0" && (
        <div id={styles.previously}>
          <p>{previuslyValue}</p>
        </div>
      )}
      <p>{currentValue}</p>
    </div>
  );
};

export default Display;
