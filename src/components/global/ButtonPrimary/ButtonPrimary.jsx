import "./buttons.css";

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
            className={isActive ? "btn-primary btn-primary--active" : "btn-primary"}
            onClick={handleClick}
        >
            {btnLabel}
        </button>
    );
};

export default ButtonPrimary;
