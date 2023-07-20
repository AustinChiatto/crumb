// components
import ButtonPrimary from "../../../global/ButtonPrimary/ButtonPrimary";

// styles
import styles from "./OutputDimensions.module.scss";

export default function OutputDimensions() {
    return (
        <div className={styles.OutputDimensions}>
            {/* place holder buttons - replace with inputs */}
            <ButtonPrimary btnLabel={"Width"}></ButtonPrimary>
            <ButtonPrimary btnLabel={"Height"}></ButtonPrimary>
        </div>
    );
}
