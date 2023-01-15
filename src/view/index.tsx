import React from "react";
import ActionButton from "../components/ActionButton";
import Display from "../components/Display";
import NumberButton from "../components/NumberButton";
import { useDisplay } from "../hooks/useDisplay";
import { NUMBERS, OPERATORS } from "../utils/constants";
import styles from "./styles.module.scss";

const App: React.FC = () => {
  return (
    <main className={styles.container}>
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
              <ActionButton value="C" action={() => console.log("clear")} />
              <ActionButton
                value="CE"
                action={() => console.log("clear entry")}
              />
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
