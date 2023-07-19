// components
import RenderedHeader from "./RenderedHeader/RenderedHeader";
import UserInput from "./UserInput/UserInput";

// styles
import styles from "./RenderedImage.module.scss";
import ButtonPrimary from "../../../../global/ButtonPrimary/ButtonPrimary";

export default function RenderedImage({ toImageRef }) {
    return (
        <div
            ref={toImageRef}
            className={styles.RenderedImage}
            style={{}}
        >
            <div className={styles.CodeContainer}>
                <RenderedHeader />
                <UserInput />
            </div>
        </div>
    );
}
