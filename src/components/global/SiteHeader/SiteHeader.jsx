// style
import styles from "./SiteHeader.module.scss";

export default function SiteHeader() {
    return (
        <header className={`${styles.SiteHeader}`}>
            <nav className={styles.SiteNav}>
                <a href={`/home`}>Codependent</a>
                <ul className={styles.InternalLinks}>
                    <li>
                        <a
                            className={styles.NavButton}
                            href={`/grid-tool`}
                        >
                            Snippets
                        </a>
                    </li>
                    <li>
                        <a
                            className={styles.NavButton}
                            href={`/code-to-img`}
                        >
                            Tools
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
