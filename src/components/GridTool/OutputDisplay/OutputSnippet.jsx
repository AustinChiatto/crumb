import { useRef } from "react";
import { useGridControl } from "../../../GridControlContext";
import ButtonPrimary from "../../global/ButtonPrimary/ButtonPrimary";
import CodeBlock from "../../global/CodeBlock/CodeBlock";

// styles
import styles from "./OutputDisplay.module.scss";
import stack from "react-syntax-highlighter/dist/esm/styles/hljs/stackoverflow-light";

// Declare Component
// ===========================
// Explanation : renders the code snippet that makes up the grid to the screen
const OutputSnippet = () => {
    // get the inputValues from the GridControlContext
    const inputValues = useGridControl();
    // create a new ref object with value of null - will store code snippet for copy to clipboard
    const copyTargetRef = useRef(null);

    // Displayed Snippet
    // ===========================
    // stores the snippet in a variable to be called later during the handleCopy
    const cssSnippet = `.parent {
    grid-template-columns: repeat(${inputValues[0]}, 1fr);
    grid-template-rows: repeat(${inputValues[1]}, 1fr);
    gap: ${inputValues[2]}px;
}

.grid-child {
    /* child style */
}`;

    const htmlSnippet = `<section class="parent">
    <!-- place grid children here -->
</section>`;

    // Copy Snippet to Clipboard
    // ===========================
    function handleCSS() {
        navigator.clipboard.writeText(cssSnippet);
    }

    function handleHTML() {
        navigator.clipboard.writeText(htmlSnippet);
    }

    return (
        <>
            <section className={styles.GridSnippetWrapper}>
                <div className={styles.GridSnippet}>
                    <div className={styles.GridSnippetHeader}>
                        <h3>HTML</h3>
                        <ButtonPrimary
                            btnLabel={"Copy"}
                            onClick={handleHTML}
                        ></ButtonPrimary>
                    </div>
                    <div className={styles.SnippetContainer}>
                        <CodeBlock
                            code={htmlSnippet}
                            language={"htmlbars"}
                            theme={stack}
                            ref={copyTargetRef}
                        ></CodeBlock>
                    </div>
                </div>
                <div className={styles.GridSnippet}>
                    <div className={styles.GridSnippetHeader}>
                        <h3>CSS</h3>
                        <ButtonPrimary
                            btnLabel={"Copy"}
                            onClick={handleCSS}
                        ></ButtonPrimary>
                    </div>
                    <div className={styles.SnippetContainer}>
                        <CodeBlock
                            code={cssSnippet}
                            language={"css"}
                            theme={stack}
                            ref={copyTargetRef}
                        ></CodeBlock>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OutputSnippet;
