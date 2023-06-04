import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const ButtonList = () => {
    return (
        <ul className="btn-list">
            {buttons.map((button) => {
                return (
                    <li
                        key={button.id}
                        className="btn-list__item"
                    >
                        <ButtonPrimary btnLabel={button.label}></ButtonPrimary>
                    </li>
                );
            })}
        </ul>
    );
};

export default ButtonList;
