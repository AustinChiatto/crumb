// components
import SnippetGrid from "./SnippetGrid/SnippetGrid";
import ToolSelection from "./ToolSelection/ToolSelection";

// styles
import styles from "./dashboard.module.scss";

export default function Dashboard() {
    return (
        <div className={styles.Wrapper}>
            <ToolSelection />
            <SnippetGrid />
        </div>
    );
}
