// hooks
import { useState } from "react";

// components
import CodeBlock from "../../../../../global/CodeBlock/CodeBlock";

// style
import styles from "./UserInput.module.scss";
import github from "react-syntax-highlighter/dist/esm/styles/hljs/github";
import atom from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light";

export default function UserInput() {
    const [codeInput, setCodeInput] = useState(`.text-container {
        grid-column: 1/1;
        grid-row: 1/1;
}`);

    return (
        <>
            <div className={styles.TextContainer}>
                <textarea
                    className={styles.CodeInput}
                    value={codeInput}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    cols={10}
                    wrap="hard"
                    rows={3}
                    onChange={(e) => setCodeInput(e.target.value)}
                ></textarea>
                <CodeBlock
                    code={codeInput}
                    language={"css"}
                    customStyle={{
                        margin: "0",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "400",
                        fontSize: "1rem",
                        fontVariantLigatures: "none",
                        lineHeight: "1.5",
                        textSizeAdjust: "none",
                        letterSpacing: "0.1px",
                        maxWidth: "100%",
                        overflowWrap: "break-word",
                        height: "auto",
                        background: "none",
                    }}
                    theme={atom}
                ></CodeBlock>
            </div>
        </>
    );
}
