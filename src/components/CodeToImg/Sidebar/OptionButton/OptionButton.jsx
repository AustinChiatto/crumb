// styles
import styles from "./OptionButton.module.scss";

export default function OptionButton({ index, icon, background, customStyle, isActive, updateInput }) {
    return (
        <li
            className={styles.Option}
            id={index}
            style={{
                background: background ? `${background}` : "",
                border: isActive ? "0.125rem solid #63adf2" : "0.0625rem solid #DEDEE0",
            }}
            onClick={() => updateInput(index)}
        >
            {icon ? (
                <div
                    className={styles.Icon}
                    style={customStyle}
                ></div>
            ) : (
                ""
            )}
        </li>
    );
}
