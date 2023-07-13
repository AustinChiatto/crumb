//styles
import Tool from "./Tool/Tool";
import styles from "./ToolSelection.module.scss";

export default function ToolSelection() {
    return (
        <section className={styles.ToolSelection}>
            <ol className={styles.ToolList}>
                <Tool />
            </ol>
        </section>
    );
}
