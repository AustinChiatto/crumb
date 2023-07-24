// components
import RenderedImage from "./RenderedImage/RenderedImage";

// styles
import styles from "./OutputDisplay.module.scss";

export default function OutputDisplay({ toImageRef, codeLang }) {
    return (
        <div className={styles.OutputDisplay}>
            <RenderedImage
                toImageRef={toImageRef}
                codeLang={codeLang}
            />
        </div>
    );
}
