// libraries
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import html from "react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars";

SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("html", html);

export default function CodeBlock({ code, language, customStyle, theme }) {
    const fontFaceStyle = {
        fontFamily: "Inter, sans-serif",
        src: 'url("https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap")',
    };

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
                        ...fontFaceStyle,
                    },
                }}
                customStyle={customStyle ? customStyle : { background: "none" }}
            />
        </pre>
    );
}
