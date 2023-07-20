import SnippetEditor from "../components/SnippetEditor/SnippetEditor";
import SiteHeader from "../components/global/SiteHeader/SiteHeader";

export default function SnippetEditorView() {
    return (
        <>
            <SiteHeader />
            <div className="view-wrapper">
                <SnippetEditor />
            </div>
        </>
    );
}
