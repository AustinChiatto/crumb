// context
import { useCodeToImg, useUpdateValues } from "../../../CodeToImgContext";

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
    const { containerStyles, BoxShadowStyles, backgroundStyles } = useCodeToImg();
    const { handleContainerStyle, handleContainerShadow, handleBackground } = useUpdateValues();

    return (
        <aside className={`${styles.Sidebar} card`}>
            {/* Style Options */}
            <section className={styles.SidebarSection}>
                <h3 className={styles.Label}>Style</h3>
                <ul className={styles.OptionGrid}>
                    {Object.values(containerStyles).map((e) => (
                        <OptionButton
                            key={e.key}
                            index={e.index}
                            isActive={e.active}
                            icon={e.icon}
                            customStyle={e.customStyle}
                            updateInput={handleContainerStyle}
                        />
                    ))}
                </ul>
            </section>
            {/* Container Properties */}
            {/* <section className={styles.SidebarSection}>
                <h3 className={styles.Label}>Properties</h3>
                <SnippetProperty icon={iconPaddingHorizontal} />
                <SnippetProperty icon={iconPaddingVertical} />
                <SnippetProperty icon={iconBorderRadius} />
            </section> */}
            {/* Drop Shadow Options */}
            <section className={styles.SidebarSection}>
                <h3 className={styles.Label}>Shadow</h3>
                <ul className={styles.OptionGrid}>
                    {Object.values(BoxShadowStyles).map((e) => (
                        <OptionButton
                            key={e.key}
                            index={e.index}
                            isActive={e.active}
                            icon={e.icon}
                            customStyle={e.customStyle}
                            updateInput={handleContainerShadow}
                        />
                    ))}
                </ul>
            </section>
            {/* Container Properties */}
            {/* Background Options */}
            <section className={styles.SidebarSection}>
                <h3 className={styles.Label}>Background</h3>
                <ul className={styles.OptionGrid}>
                    {backgroundStyles.map((e) => (
                        <OptionButton
                            key={e.key}
                            index={e.index}
                            isActive={e.active}
                            icon={e.icon}
                            background={e.backgroundStyle}
                            customStyle={e.customStyle}
                            updateInput={handleBackground}
                        />
                    ))}
                </ul>
            </section>
        </aside>
    );
}
