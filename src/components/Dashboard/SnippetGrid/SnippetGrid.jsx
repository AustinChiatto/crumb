// components
import ButtonPrimary from "../../global/ButtonPrimary/ButtonPrimary";
import SnippetCard from "./SnippetCard/SnippetCard";
import elementData from "./snippets/elements.json";

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
                {Object.values(elementData).map((element) => (
                    <SnippetCard
                        key={element.id}
                        id={element.id}
                        label={element.label}
                        elementStyle={element.style}
                    />
                ))}
            </section>
        </div>
    );
}
