import styles from "./SnippetOutput.module.scss";

export default function SnippetOutput() {
    return (
        <section className={styles.SnippetOutput}>
            <h3 className={styles.SnippetLabel}>
                ID <span className={styles.SnippetID}>001</span>
            </h3>
            <div className={styles.SnippetDisplay}>
                <a style={{}}>btn</a>
            </div>
        </section>
    );
}
