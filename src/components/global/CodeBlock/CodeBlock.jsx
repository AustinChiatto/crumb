// libraries
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

import css from "react-syntax-highlighter/dist/esm/languages/hljs/scss";
import Vs from "react-syntax-highlighter/dist/esm/styles/hljs/github";

SyntaxHighlighter.registerLanguage("css", css);

export default function CodeBlock({ code, language }) {
    return (
        <pre>
            <SyntaxHighlighter
                children={code}
                language={language}
                style={Vs}
                customStyle={{ background: "none" }}
            />
        </pre>
    );
}
