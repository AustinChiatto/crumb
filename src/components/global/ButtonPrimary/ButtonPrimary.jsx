import styles from "./ButtonPrimary.module.scss";

const ButtonPrimary = ({ btnLabel, isActive, event }) => {
    // when clicking a button
    // ===========================
    function handleClick() {
        // run event that is passed in as a prop
        event();
        // run click animation
        // ... write future click animation ...
    }

    return (
        <button
            className={isActive ? styles.ButtonActive : styles.Button}
            onClick={handleClick}
        >
            {btnLabel}
        </button>
    );
};

export default ButtonPrimary;
