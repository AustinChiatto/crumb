import styles from "./Tool.module.scss";
import gridTool from "../../../../assets/images/grid-tool-thumbnail.png";

export default function Tool() {
    return (
        <li className={styles.Tool}>
            <a href={`/grid-tool`}>
                <h3 className="text-base">Tool Heading</h3>
                <div className={styles.ToolThumbnail}>
                    <img
                        className={styles.ToolThumbnailImg}
                        src={gridTool}
                        alt=""
                    />
                </div>
            </a>
        </li>
    );
}
