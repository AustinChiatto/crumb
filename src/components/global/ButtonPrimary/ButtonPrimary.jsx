import styles from "./ButtonPrimary.module.scss";

const ButtonPrimary = ({ isActive, onClick, btnLabel }) => {
    return (
        <button
            className={isActive ? styles.ButtonActive : styles.Button}
            onClick={onClick}
        >
            {btnLabel}
        </button>
    );
};

export default ButtonPrimary;
