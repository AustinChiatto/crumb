// components
import ButtonPrimary from "../../global/ButtonPrimary/ButtonPrimary";
import SnippetCard from "./SnippetCard/SnippetCard";
import elementData from "../../../data/elements.json";

//styles
import styles from "./SnippetGrid.module.scss";

export default function SnippetGrid() {
    return (
        <section className={styles.SnippetWrapper}>
            <h2 className="section-header">Snippets</h2>
            <div className={styles.SnippetSorting}>
                <ButtonPrimary btnLabel="Buttons"></ButtonPrimary>
                <ButtonPrimary btnLabel="Cards"></ButtonPrimary>
            </div>
            <section className={styles.SnippetGrid}>
                {Object.values(elementData).map((element) => (
                    <SnippetCard
                        key={element.id}
                        id={element.id}
                    />
                ))}
            </section>
        </section>
    );
}
