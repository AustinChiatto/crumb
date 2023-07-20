// styles
import styles from "./SnippetProperty.module.scss";

export default function SnippetProperty({ index, value, updateValue, icon }) {
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
                    onClick={() => updateValue(index, "sub")}
                >
                    -
                </div>
                <div className={styles.PropertyValue}>{value}</div>
                <div
                    className={styles.PropertyButton}
                    onClick={() => updateValue(index, "add")}
                >
                    +
                </div>
            </div>
        </li>
    );
}
