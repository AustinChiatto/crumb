// components
import RenderedImage from "./RenderedImage/RenderedImage";

// styles
import styles from "./OutputDisplay.module.scss";

export default function OutputDisplay({ toImageRef }) {
    return (
        <div className={styles.OutputDisplay}>
            <RenderedImage toImageRef={toImageRef} />
        </div>
    );
}
