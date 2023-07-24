// libraries
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

import html from "react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars";
import bash from "react-syntax-highlighter/dist/cjs/languages/hljs/bash";
import cpp from "react-syntax-highlighter/dist/cjs/languages/hljs/cpp";
import csharp from "react-syntax-highlighter/dist/cjs/languages/hljs/csharp";
import css from "react-syntax-highlighter/dist/cjs/languages/hljs/css";
import markdown from "react-syntax-highlighter/dist/cjs/languages/hljs/markdown";
import diff from "react-syntax-highlighter/dist/cjs/languages/hljs/diff";
import ruby from "react-syntax-highlighter/dist/cjs/languages/hljs/ruby";
import go from "react-syntax-highlighter/dist/cjs/languages/hljs/go";
import Java from "react-syntax-highlighter/dist/cjs/languages/hljs/java";
import JavaScript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import JSON from "react-syntax-highlighter/dist/cjs/languages/hljs/json";
import Kotlin from "react-syntax-highlighter/dist/cjs/languages/hljs/kotlin";
import Less from "react-syntax-highlighter/dist/cjs/languages/hljs/less";
import Lua from "react-syntax-highlighter/dist/cjs/languages/hljs/lua";
import Makefile from "react-syntax-highlighter/dist/cjs/languages/hljs/makefile";
import Perl from "react-syntax-highlighter/dist/cjs/languages/hljs/perl";
import objC from "react-syntax-highlighter/dist/cjs/languages/hljs/objectivec";
import PHP from "react-syntax-highlighter/dist/cjs/languages/hljs/php";
import Python from "react-syntax-highlighter/dist/cjs/languages/hljs/python";
import Rust from "react-syntax-highlighter/dist/cjs/languages/hljs/rust";
import SCSS from "react-syntax-highlighter/dist/cjs/languages/hljs/scss";
import ShellSession from "react-syntax-highlighter/dist/cjs/languages/hljs/shell";
import SQL from "react-syntax-highlighter/dist/cjs/languages/hljs/sql";
import Swift from "react-syntax-highlighter/dist/cjs/languages/hljs/swift";
import YAML from "react-syntax-highlighter/dist/cjs/languages/hljs/yaml";
import TypeScript from "react-syntax-highlighter/dist/cjs/languages/hljs/typescript";

SyntaxHighlighter.registerLanguage("HTML", html);
SyntaxHighlighter.registerLanguage("Bash", bash);
SyntaxHighlighter.registerLanguage("C++", cpp);
SyntaxHighlighter.registerLanguage("C#", csharp);
SyntaxHighlighter.registerLanguage("CSS", css);
SyntaxHighlighter.registerLanguage("Markdown", markdown);
SyntaxHighlighter.registerLanguage("Diff", diff);
SyntaxHighlighter.registerLanguage("Ruby", ruby);
SyntaxHighlighter.registerLanguage("Go", go);
SyntaxHighlighter.registerLanguage("Java", Java);
SyntaxHighlighter.registerLanguage("JavaScript", JavaScript);
SyntaxHighlighter.registerLanguage("JSON", JSON);
SyntaxHighlighter.registerLanguage("Kotlin", Kotlin);
SyntaxHighlighter.registerLanguage("Less", Less);
SyntaxHighlighter.registerLanguage("Lua", Lua);
SyntaxHighlighter.registerLanguage("Makefile", Makefile);
SyntaxHighlighter.registerLanguage("Perl", Perl);
SyntaxHighlighter.registerLanguage("Objective-C", objC);
SyntaxHighlighter.registerLanguage("PHP", PHP);
SyntaxHighlighter.registerLanguage("Python", Python);
SyntaxHighlighter.registerLanguage("Rust", Rust);
SyntaxHighlighter.registerLanguage("SCSS", SCSS);
SyntaxHighlighter.registerLanguage("ShellSession", ShellSession);
SyntaxHighlighter.registerLanguage("SQL", SQL);
SyntaxHighlighter.registerLanguage("Swift", Swift);
SyntaxHighlighter.registerLanguage("YAML", YAML);
SyntaxHighlighter.registerLanguage("TypeScript", TypeScript);

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
