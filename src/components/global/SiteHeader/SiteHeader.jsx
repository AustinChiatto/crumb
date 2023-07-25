// style
import styles from "./SiteHeader.module.scss";

export default function SiteHeader() {
    return (
        <header className={`${styles.SiteHeader}`}>
            <nav className={styles.SiteNav}>
                <a href={`/home`}>Crumb</a>
                <ul className={styles.InternalLinks}>
                    <li>
                        <a
                            className={styles.NavButton}
                            href={`/grid-tool`}
                        >
                            Grid Tool
                        </a>
                    </li>
                    <li>
                        <a
                            className={styles.NavButton}
                            href={`/code-to-img`}
                        >
                            Code To Image
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
