// styles
import { useState } from "react";
import styles from "./RenderedHeader.module.scss";

export default function RenderedHeader({ containerHeader }) {
    const [containerHeaderName, setContainerHeaderName] = useState("MyCode");

    const handleInputChange = (event) => {
        setContainerHeaderName(event.target.value);
    };

    return (
        <div className={styles.Header}>
            <ul className={styles.BrowserButtons}>
                <li
                    className={styles.BrowserButton}
                    style={{ background: `${containerHeader.color}` }}
                ></li>
                <li
                    className={styles.BrowserButton}
                    style={{ background: `${containerHeader.color}` }}
                ></li>
                <li
                    className={styles.BrowserButton}
                    style={{ background: `${containerHeader.color}` }}
                ></li>
            </ul>
            <textarea
                value={containerHeaderName}
                className={styles.FileName}
                rows={1}
                cols={15}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                style={{ fontFamily: '"Inter", sans-serif', fontWeight: "400", color: `${containerHeader.color}` }}
                onChange={handleInputChange}
            ></textarea>
        </div>
    );
}
