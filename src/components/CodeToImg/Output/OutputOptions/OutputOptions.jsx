// components
import ButtonPrimary from "../../../global/ButtonPrimary/ButtonPrimary";

// styles
import styles from "./OutputOptions.module.scss";

export default function OutputOptions({ htmlToImageConvert, selectedOption, handleOptionChange }) {
    const options = ["Language", "html", "bash", "css", "markdown", "diff", "ruby", "go", "java", "javascript", "json", "less", "php", "python", "scss", "shell", "sql", "swift", "yaml", "typescript"];
    return (
        <div className={styles.OutputOptions}>
            <select
                className={styles.SelectionButton}
                value={selectedOption}
                onChange={handleOptionChange}
            >
                {options.map((option, index) => (
                    <option
                        key={index}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
            <ButtonPrimary
                btnLabel={"Export"}
                onClick={htmlToImageConvert}
            ></ButtonPrimary>
        </div>
    );
}
