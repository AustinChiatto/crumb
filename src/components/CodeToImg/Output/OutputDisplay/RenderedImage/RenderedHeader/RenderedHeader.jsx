// styles
import styles from "./RenderedHeader.module.scss";

export default function RenderedHeader({ containerHeader }) {
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
            <p
                className={styles.FileName}
                style={{ fontFamily: '"Inter", sans-serif', fontWeight: "400", color: `${containerHeader.color}` }}
            >
                MyCode.js
            </p>
        </div>
    );
}
