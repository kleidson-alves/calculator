import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface IDisplayContextData {
  currentValue: string;
  previuslyValue: string;
  updateCurrentValue: (value: string) => void;
  updateOperator: (op: string) => void;
}

interface DisplayProviderProps {
  children: ReactNode;
}

const DisplayContext = createContext<IDisplayContextData>(
  {} as IDisplayContextData
);

const DisplayProvider: React.FC<DisplayProviderProps> = ({ children }) => {
  const [operator, setOperator] = useState("");

  const [currentValue, setCurrentValue] = useState("0");
  const [previuslyValue, setPreviuslyValue] = useState("0");
  const [isResult, setIsResult] = useState(false);

  const updateCurrentValue = useCallback(
    (value: string) => {
      if (isResult) {
        if (value === ".") {
          setCurrentValue("0.");
        } else if (value === "00") {
          setCurrentValue("0");
        } else {
          setCurrentValue(value);
        }
        setIsResult(false);
        return;
      }

      if (value === ".") {
        setCurrentValue((s) => {
          if (s.includes(".")) return s;
          else return s.concat(value);
        });
      } else if (value === "00") {
        setCurrentValue((s) => (s === "0" ? s : s.concat(value)));
      } else {
        setCurrentValue((s) => (s === "0" ? value : s.concat(value)));
      }
    },
    [isResult]
  );

  const updateOperator = useCallback(
    (op: string) => {
      if (op === "=" || operator !== "") {
        const a = Number(previuslyValue.split(" ")[0]);
        const b = Number(currentValue);
        let result = 0;

        if (operator === "+") {
          result = a + b;
        } else if (operator === "-") {
          result = a - b;
        } else if (operator === "*") {
          result = a * b;
        } else if (operator === "/") {
          result = a / b;
        }
        setCurrentValue(result.toString());
        if (op === "=") {
          setPreviuslyValue("");
          setOperator("");
        } else {
          setPreviuslyValue(`${result.toString()} ${op}`);
          setOperator(op);
        }

        setIsResult(true);
      } else {
        setOperator(op);
        setPreviuslyValue(`${currentValue} ${op} `);
        setCurrentValue("0");
      }
    },
    [currentValue, operator, previuslyValue]
  );

  return (
    <DisplayContext.Provider
      value={{
        currentValue,
        previuslyValue,
        updateCurrentValue,
        updateOperator,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

const useDisplay = () => {
  const context = useContext(DisplayContext);

  return context;
};

export { DisplayProvider, useDisplay };
