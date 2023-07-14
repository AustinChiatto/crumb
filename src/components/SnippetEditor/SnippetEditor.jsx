// styles
import CodeOutput from "./CodeOutput/CodeOutput";
import SnippetInput from "./SnippetInput/SnippetInput";
import SnippetOutput from "./SnippetOutput/SnippetOutput";

export default function SnippetEditor() {
    return (
        <>
            <SnippetOutput />
            <SnippetInput />
            <CodeOutput />
        </>
    );
}
