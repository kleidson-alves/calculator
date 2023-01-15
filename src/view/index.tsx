import React, { useCallback, useState } from "react";
import { MdLightMode, MdModeNight } from "react-icons/md";

import { useDisplay } from "../hooks/useDisplay";

import ActionButton from "../components/ActionButton";
import Display from "../components/Display";
import NumberButton from "../components/NumberButton";

import { NUMBERS, OPERATORS } from "../utils/constants";

import styles from "./styles.module.scss";

const App: React.FC = () => {
  const { clear, clearEntry } = useDisplay();
  const [theme, setTheme] = useState(styles.light);

  const handleSwitchMode = useCallback(() => {
    setTheme((cur) => (cur === styles.light ? styles.dark : styles.light));
  }, []);

  return (
    <main className={styles.container} id={theme}>
      <button onClick={handleSwitchMode} className={styles.icon}>
        {theme === styles.light ? <MdModeNight /> : <MdLightMode />}
      </button>
      <div className={styles.content}>
        <section className={styles.visor}>
          <Display />
        </section>
        <section className={styles.keyboard}>
          <div id={styles.numbers}>
            {NUMBERS.map((n) => (
              <NumberButton key={n} number={n} />
            ))}
            <NumberButton number="00" />
            <NumberButton number={0} />
            <NumberButton number="." />
          </div>
          <div id={styles.actions}>
            <div>
              <ActionButton value="C" action={clear} />
              <ActionButton value="CE" action={clearEntry} />
              {OPERATORS.map((op, index) => (
                <ActionButton key={index} value={op} />
              ))}
              <ActionButton value="=" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
