// components
import ButtonPrimary from "../../global/ButtonPrimary/ButtonPrimary";

//styles
import styles from "./SnippetGrid.module.scss";

export default function SnippetGrid() {
    return (
        <div className={styles.SnippetWrapper}>
            <div className={styles.SnippetSorting}>
                <ButtonPrimary btnLabel="Buttons"></ButtonPrimary>
                <ButtonPrimary btnLabel="Cards"></ButtonPrimary>
            </div>
            <section className={styles.SnippetGrid}>
                <article className={styles.Snippet}>
                    <h4 className={styles.SnippetLabel}>
                        ID <span className={styles.SnippetID}>001</span>
                    </h4>
                    <div className={styles.SnippetDisplay}>btn</div>
                </article>
            </section>
        </div>
    );
}
