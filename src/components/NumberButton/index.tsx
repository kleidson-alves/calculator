import React from "react";
import { useDisplay } from "../../hooks/useDisplay";
import styles from "./styles.module.scss";

interface INumberButtonProps {
  number: number | string;
}

const NumberButton: React.FC<INumberButtonProps> = ({ number }) => {
  const { updateCurrentValue } = useDisplay();

  return (
    <button
      className={styles.container}
      onClick={() => updateCurrentValue(number.toString())}
    >
      <p>{number}</p>
    </button>
  );
};

export default NumberButton;
