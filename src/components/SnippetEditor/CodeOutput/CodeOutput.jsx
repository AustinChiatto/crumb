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
        padding-inline: ${inputValues[0]}px;
        padding-block: ${inputValues[1]}px;
        background: #974ec2;
        box-shadow: 0px 3px 0px 0px #513f99;
        border-radius: ${inputValues[2]}px;
        color: #fff;
        font-size: ${inputValues[3]}px;
        transition: all 50ms ease-in-out;
    }

    // hover style
    .button:hover {
        transform: translateY(3px);
        box-shadow:0px 0px 0px 0px #513f99;
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
