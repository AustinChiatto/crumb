import { useState } from "react";

const ButtonPrimary = ({ btnLabel }) => {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive((prevState) => !prevState);

    return (
        <button
            className={active ? "btn-primary--active" : "btn-primary"}
            onClick={toggleActive}
        >
            {btnLabel}
        </button>
    );
};

export default ButtonPrimary;
