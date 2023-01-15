import React, { useCallback } from "react";
import styles from "./styles.module.scss";
import { FiPlus, FiX, FiPercent, FiDivide, FiMinus } from "react-icons/fi";
import { useDisplay } from "../../hooks/useDisplay";

interface IActionButtonProps {
  value: string;
  action?: () => void;
}

const ActionButton: React.FC<IActionButtonProps> = ({ value, action }) => {
  const { updateOperator } = useDisplay();

  const getIcon = useCallback((operator: string) => {
    if (operator === "+") return <FiPlus />;

    if (operator === "-") return <FiMinus />;

    if (operator === "/") return <FiDivide />;

    if (operator === "*") return <FiX />;

    if (operator === "%") return <FiPercent />;
  }, []);

  return (
    <button
      onClick={action ? action : () => updateOperator(value)}
      className={styles.container}
      id={value === "=" ? styles.equal : undefined}
    >
      {!!getIcon(value) ? getIcon(value) : <p>{value}</p>}
    </button>
  );
};

export default ActionButton;
