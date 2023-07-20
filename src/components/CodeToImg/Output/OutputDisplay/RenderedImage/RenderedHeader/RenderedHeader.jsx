// styles
import styles from "./RenderedHeader.module.scss";

export default function RenderedHeader() {
    return (
        <div className={styles.Header}>
            <ul className={styles.BrowserButtons}>
                <li className={styles.BrowserButton}></li>
                <li className={styles.BrowserButton}></li>
                <li className={styles.BrowserButton}></li>
            </ul>
            <p
                className={styles.FileName}
                style={{ fontFamily: '"Inter", sans-serif', fontWeight: "400" }}
            >
                MyCode.js
            </p>
        </div>
    );
}
