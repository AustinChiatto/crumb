// styles
import styles from "./OptionButton.module.scss";

export default function OptionButton({ index, icon, background, customStyle, isActive }) {
    return (
        <li
            className={styles.Option}
            id={index}
            style={{
                background: isActive ? "#e5eff9" : `${background}`,
                border: isActive ? "0.125rem solid #63adf2" : "0.0625rem solid #DEDEE0",
            }}
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
