// components
import ButtonPrimary from "../../../global/ButtonPrimary/ButtonPrimary";

// styles
import styles from "./OutputOptions.module.scss";

export default function OutputOptions({ htmlToImageConvert, selectedOption, handleOptionChange }) {
    const options = ["Language", "HTML", "Bash", "C++", "C#", "CSS", "Markdown", "Diff", "Ruby", "Go", "Java", "JavaScript", "JSON", "Kotlin", "Less", "Lua", "Makefile", "Perl", "Objective-C", "PHP", "Python", "Rust", "SCSS", "Shell", "SQL", "Swift", "YAML", "TypeScript", "Rust", "Rust"];
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
