// components
import ButtonPrimary from "../../../global/ButtonPrimary/ButtonPrimary";

// styles
import styles from "./OutputOptions.module.scss";

export default function OutputOptions({ htmlToImageConvert }) {
    return (
        <div className={styles.OutputOptions}>
            {/* place holder buttons - replace with drop downs */}
            <ButtonPrimary btnLabel={"Language"}></ButtonPrimary>
            <ButtonPrimary
                btnLabel={"Export"}
                onClick={htmlToImageConvert}
            ></ButtonPrimary>
        </div>
    );
}
