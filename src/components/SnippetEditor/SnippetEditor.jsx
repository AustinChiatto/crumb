// styles
import { SnippetEditorProvider } from "../../SnippetEditorContext";
import CodeOutput from "./CodeOutput/CodeOutput";
import SnippetInput from "./SnippetInput/SnippetInput";
import SnippetOutput from "./SnippetOutput/SnippetOutput";

export default function SnippetEditor() {
    return (
        <>
            <SnippetEditorProvider>
                <SnippetOutput />
                <SnippetInput />
                <CodeOutput />
            </SnippetEditorProvider>
        </>
    );
}
