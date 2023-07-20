import styles from "./Tool.module.scss";
import gridTool from "../../../../assets/images/grid-tool-thumbnail.jpg";
import codeToImg from "../../../../assets/images/code-to-img-thumbnail.jpg";

export default function Tool() {
    return (
        <>
            <li className={styles.Tool}>
                <a href={`/grid-tool`}>
                    <h3 className="text-base">CSS Grid Builder</h3>
                    <div className={styles.ToolThumbnail}>
                        <img
                            className={styles.ToolThumbnailImg}
                            src={gridTool}
                            alt=""
                        />
                    </div>
                </a>
            </li>
            <li className={styles.Tool}>
                <a href={`/code-to-img`}>
                    <h3 className="text-base">Pretty Code Snippet</h3>
                    <div className={styles.ToolThumbnail}>
                        <img
                            className={styles.ToolThumbnailImg}
                            src={codeToImg}
                            alt=""
                        />
                    </div>
                </a>
            </li>
        </>
    );
}
