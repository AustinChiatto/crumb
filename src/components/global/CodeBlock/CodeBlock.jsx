// libraries
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import html from "react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars";

SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("html", html);

export default function CodeBlock({ code, language, customStyle, theme }) {
    return (
        <pre>
            <SyntaxHighlighter
                children={code}
                language={language}
                style={theme}
                wrapLongLines
                codeTagProps={{
                    style: {
                        wordBreak: "break-word",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: "400",
                    },
                }}
                customStyle={customStyle ? customStyle : { background: "none" }}
            />
        </pre>
    );
}
