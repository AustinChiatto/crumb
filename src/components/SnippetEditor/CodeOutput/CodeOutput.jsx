// context
import { useSnippetEdit } from "../../../SnippetEditorContext";

// components
import ButtonPrimary from "../../global/ButtonPrimary/ButtonPrimary";
import CodeBlock from "../../global/CodeBlock/CodeBlock";

// styles
import styles from "./CodeOutput.module.scss";

export default function CodeOutput() {
    // context that hold input values
    const inputValues = useSnippetEdit();

    let codeSnippet = `
    // base style
    .button {
        padding-inline: ${inputValues[0]}rem;
        padding-block: ${inputValues[1]}rem;
        background: #974ec2;
        box-shadow: 0rem ${inputValues[1] * 0.25}rem 0rem 0rem #513f99;
        border-radius: ${inputValues[2]}rem;
        color: #fff;
        font-size: ${inputValues[3]}rem;
        transition: all 50ms ease-in-out;
    }

    // hover style
    .button:hover {
        transform: translateY(${inputValues[1] * 0.25}rem);
        box-shadow: 0rem 0rem 0rem 0rem #513f99;
    }
    `;

    return (
        <section className={`${styles.CodeOutput} card`}>
            <ul className={styles.CodeOptions}>
                <li className={styles.LanguageOptions}>
                    <ButtonPrimary btnLabel="HTML"></ButtonPrimary>
                    <ButtonPrimary
                        btnLabel="CSS"
                        isActive={true}
                    ></ButtonPrimary>
                    <ButtonPrimary btnLabel="JavaScript"></ButtonPrimary>
                </li>
                <li>
                    <ButtonPrimary btnLabel="Copy Code"></ButtonPrimary>
                </li>
            </ul>
            <div className={styles.OutputCode}>
                <CodeBlock
                    code={codeSnippet}
                    language={"css"}
                ></CodeBlock>
            </div>
        </section>
    );
}
