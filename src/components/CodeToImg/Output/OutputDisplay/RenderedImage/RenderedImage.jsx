// context
import { useCodeToImg } from "../../../../../CodeToImgContext";

// components
import RenderedHeader from "./RenderedHeader/RenderedHeader";
import UserInput from "./UserInput/UserInput";

// styles
import styles from "./RenderedImage.module.scss";

export default function RenderedImage({ toImageRef }) {
    const { containerStyles, BoxShadowStyles, backgroundStyles } = useCodeToImg();

    const containerMatch = containerStyles.find((e) => e.active);
    const containerMatchHeader = containerMatch.containerHeader;
    const containerCodeTheme = containerMatch.themeLight;
    const shadowMatch = BoxShadowStyles.find((e) => e.active);
    const backgroundMatch = backgroundStyles.find((e) => e.active);

    return (
        <div
            ref={toImageRef}
            className={styles.RenderedImage}
            style={{ background: `${backgroundMatch.backgroundStyle}` }}
        >
            <div
                className={styles.CodeContainer}
                style={{ ...containerMatch.containerStyle, boxShadow: `${shadowMatch.shadowStyle.boxShadow}` }}
            >
                <RenderedHeader containerHeader={containerMatchHeader} />
                <UserInput themeLight={containerCodeTheme} />
            </div>
        </div>
    );
}
