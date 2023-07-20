//styles
import Tool from "./Tool/Tool";
import styles from "./ToolSelection.module.scss";

import gridToolThumbnail from "../../../assets/images/grid-tool-thumbnail.jpg";
import codeToImageThumbnail from "../../../assets/images/code-to-img-thumbnail.jpg";

const tools = [
    { index: 0, link: `/grid-tool`, label: "CSS Grid Builder", thumbnail: gridToolThumbnail },
    { index: 1, link: `/code-to-img`, label: "Beautiful Code Images", thumbnail: codeToImageThumbnail },
];

export default function ToolSelection() {
    return (
        <section className={styles.ToolSelection}>
            <h2 className="section-header">Tools</h2>
            <ol className={`card ${styles.ToolList}`}>
                {Object.values(tools).map((e) => (
                    <Tool
                        key={e.index}
                        index={e.index}
                        link={e.link}
                        label={e.label}
                        thumbnail={e.thumbnail}
                    />
                ))}
            </ol>
        </section>
    );
}
