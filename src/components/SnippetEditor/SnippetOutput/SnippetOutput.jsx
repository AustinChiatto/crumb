// context
import { useSnippetEdit } from "../../../SnippetEditorContext";

// styles
import styles from "./SnippetOutput.module.scss";

export default function SnippetOutput() {
    const inputValues = useSnippetEdit();

    return (
        <section className={styles.SnippetOutput}>
            <h3 className={styles.SnippetLabel}>
                ID <span className={styles.SnippetID}>001</span>
            </h3>
            <div className={styles.SnippetDisplay}>
                <a
                    style={{
                        paddingInline: `${inputValues[0]}px`,
                        paddingBlock: `${inputValues[1]}px`,
                        background: "#974ec2",
                        boxShadow: "0px 3px 0px 0px #513f99",
                        borderRadius: `${inputValues[2]}px`,
                        color: "#fff",
                        fontSize: `${inputValues[3]}px`,
                        transition: "all 50ms ease-in-out",
                    }}
                >
                    Click
                </a>
            </div>
        </section>
    );
}
