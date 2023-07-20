// styles
import SnippetProperty from "../../SnippetEditor/SnippetInput/SnippetProperty/SnippetProperty";
import styles from "./Sidebar.module.scss";

// icons
import iconPaddingHorizontal from "../../../assets/icons/icon_padding-horizontal.svg";
import iconPaddingVertical from "../../../assets/icons/icon_padding-vertical.svg";
import iconBorderRadius from "../../../assets/icons/icon_border-radius.svg";
import iconFontSize from "../../../assets/icons/icon_font-size.svg";
import OptionButton from "./OptionButton/OptionButton";

export default function Sidebar() {
    const containerStyleOptions = [
        { key: 0, index: 0, active: true, icon: true, customStyle: { opacity: "0.85", background: "#fefefe", borderRight: "0.25rem solid #dedee0", borderBottom: "0.25rem solid #dedee0" } },
        { key: 1, index: 1, active: false, icon: true, customStyle: { opacity: "0.65", background: "#151515", borderRight: "0.25rem solid #3f3d3e", borderBottom: "0.25rem solid #3f3d3e" } },
        { key: 2, index: 2, active: false, icon: true, customStyle: { background: "#fefefe", borderRight: "0.125rem solid #1e1e1e", borderBottom: "0.125rem solid #1e1e1e" } },
        { key: 3, index: 3, active: false, icon: true, customStyle: {} },
        { key: 4, index: 4, active: false, icon: true, customStyle: { background: "#3f3d3e" } },
        { key: 5, index: 5, active: false, icon: true, customStyle: { opacity: "0.85", borderRight: "0.25rem solid #dedee0", borderBottom: "0.25rem solid #dedee0" } },
    ];

    const containerShadowOptions = [
        { key: 0, index: 0, active: false, icon: true, customStyle: { opacity: "1", background: "#fefefe", borderRight: "0.25rem solid #dedee0", borderBottom: "0.25rem solid #dedee0", boxShadow: "none" } },
        { key: 1, index: 1, active: true, icon: true, customStyle: { opacity: "1", background: "#fefefe", borderRight: "0.25rem solid #dedee0", borderBottom: "0.25rem solid #dedee0" } },
        { key: 2, index: 2, active: false, icon: true, customStyle: { opacity: "0.85", background: "#fefefe", borderRight: "0.25rem solid #dedee0", borderBottom: "0.25rem solid #dedee0", boxShadow: `0.4px 0.4px 0.7px rgba(0, 0, 0, 0.023), 0.8px 0.9px 1.5px rgba(0, 0, 0, 0.041), 1.4px 1.4px 2.5px rgba(0, 0, 0, 0.054), 2.1px 2.2px 3.8px rgba(0, 0, 0, 0.064), 3px 3.1px 5.5px rgba(0, 0, 0, 0.07), 4.3px 4.4px 7.8px rgba(0, 0, 0, 0.074), 6px 6.3px 11.1px rgba(0, 0, 0, 0.075), 8.8px 9.1px 16.1px rgba(0, 0, 0, 0.074), 13.5px 14.1px 24.8px rgba(0, 0, 0, 0.072), 24px 25px 44px rgba(0, 0, 0, 0.07)` } },
    ];

    const imageBackgroundOptions = [
        { key: 0, index: 0, active: true, backgroundStyle: "linear-gradient(135deg, #00ff87 0%, #60efff 100%)" },
        { key: 1, index: 1, active: false, backgroundStyle: "linear-gradient(135deg, #0061ff 0%, #60efff 100%)" },
        { key: 2, index: 2, active: false, backgroundStyle: "linear-gradient(135deg, #ff1b6b 0%, #45caff 100%)" },
        { key: 3, index: 3, active: false, backgroundStyle: "linear-gradient(135deg, #40c9ff 0%, #e81cff 100%)" },
        { key: 4, index: 4, active: false, backgroundStyle: "linear-gradient(135deg, #ffa585 0%, #ffeda0 100%)" },
        { key: 5, index: 5, active: false, backgroundStyle: "linear-gradient(135deg, #ff930f 0%, #fff95b 100%)" },
        { key: 6, index: 6, active: false, backgroundStyle: "linear-gradient(135deg, #ff0f7b 0%, #f89b29 100%)" },
        { key: 7, index: 7, active: false, backgroundStyle: "linear-gradient(135deg, #696eff 0%, #f8acff 100%)" },
        { key: 8, index: 8, active: false, backgroundStyle: "linear-gradient(135deg, #ff5858 0%, #ffc8c8 100%)" },
    ];

    return (
        <aside className={`${styles.Sidebar} card`}>
            {/* Style Options */}
            <section className={styles.SidebarSection}>
                <h3 className={styles.Label}>Style</h3>
                <ul className={styles.OptionGrid}>
                    {Object.values(containerStyleOptions).map((e) => (
                        <OptionButton
                            key={e.key}
                            index={e.index}
                            isActive={e.active}
                            icon={e.icon}
                            customStyle={e.customStyle}
                        />
                    ))}
                </ul>
            </section>
            {/* Container Properties */}
            <section className={styles.SidebarSection}>
                <h3 className={styles.Label}>Properties</h3>
                <SnippetProperty icon={iconPaddingHorizontal} />
                <SnippetProperty icon={iconPaddingVertical} />
                <SnippetProperty icon={iconBorderRadius} />
            </section>
            {/* Drop Shadow Options */}
            <section className={styles.SidebarSection}>
                <h3 className={styles.Label}>Shadow</h3>
                <ul className={styles.OptionGrid}>
                    {Object.values(containerShadowOptions).map((e) => (
                        <OptionButton
                            key={e.key}
                            index={e.index}
                            isActive={e.active}
                            icon={e.icon}
                            customStyle={e.customStyle}
                        />
                    ))}
                </ul>
            </section>
            {/* Container Properties */}
            {/* Background Options */}
            <section className={styles.SidebarSection}>
                <h3 className={styles.Label}>Background</h3>
                <ul className={styles.OptionGrid}>
                    {Object.values(imageBackgroundOptions).map((e) => (
                        <OptionButton
                            key={e.key}
                            index={e.index}
                            isActive={e.active}
                            icon={e.icon}
                            background={e.backgroundStyle}
                            customStyle={e.customStyle}
                        />
                    ))}
                </ul>
            </section>
        </aside>
    );
}
