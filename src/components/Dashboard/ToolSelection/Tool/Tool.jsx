import styles from "./Tool.module.scss";

export default function Tool({ index, link, label, thumbnail }) {
    return (
        <>
            <li
                className={styles.Tool}
                index={index}
            >
                <a href={link}>
                    <h3 className={`text-base ${styles.ToolLabel}`}>{label}</h3>
                    <div className={styles.ToolThumbnail}>
                        <img
                            className={styles.ToolThumbnailImg}
                            src={`${thumbnail}`}
                            alt=""
                        />
                    </div>
                </a>
            </li>
        </>
    );
}
