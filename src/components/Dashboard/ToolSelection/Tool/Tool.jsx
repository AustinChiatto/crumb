import styles from "./Tool.module.scss";

export default function Tool() {
    return (
        <li className={styles.Tool}>
            <a href={`/grid-tool`}>
                <h3 className="text-base">Tool Heading</h3>
                <div className={styles.ToolThumbnail}>grid tool</div>
            </a>
        </li>
    );
}
