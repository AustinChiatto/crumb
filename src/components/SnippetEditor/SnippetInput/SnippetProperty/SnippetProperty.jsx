// hooks
import { useState } from "react";

// styles
import styles from "./SnippetProperty.module.scss";

export default function SnippetProperty({ icon, defaultValue }) {
    const [inputValue, setInputValue] = useState(defaultValue);

    // adds or subtracts from the current value of the property depending on the button clicked
    const handleOperation = (operation) => {
        if (operation === "sub" && inputValue > 0) {
            setInputValue(() => inputValue - 1);
        } else if (operation === "add") {
            setInputValue(() => inputValue + 1);
        }
    };

    return (
        <li className={styles.Property}>
            <div className={styles.PropertyIcon}>
                <img
                    src={icon}
                    width={20}
                    height={20}
                    alt=""
                />
            </div>
            <div className={styles.PropertyInput}>
                <div
                    className={styles.PropertyButton}
                    onClick={() => handleOperation("sub")}
                >
                    -
                </div>
                <div className={styles.PropertyValue}>{inputValue}</div>
                <div
                    className={styles.PropertyButton}
                    onClick={() => handleOperation("add")}
                >
                    +
                </div>
            </div>
        </li>
    );
}
