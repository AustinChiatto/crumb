import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const ButtonList = () => {
    const [buttons, setButtons] = useState([
        {
            id: 1,
            label: "Headings",
            setActive: true,
        },
        {
            id: 2,
            label: "Body",
        },
    ]);

    return (
        <ul className="btn-list">
            {buttons.map((button) => {
                return (
                    <li className="btn-list__item">
                        <ButtonPrimary
                            key={button.id}
                            btnLabel={button.label}
                        ></ButtonPrimary>
                    </li>
                );
            })}
        </ul>
    );
};

export default ButtonList;
