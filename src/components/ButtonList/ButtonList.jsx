import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const ButtonList = () => {
    return (
        <ul className="btn-list">
            <li className="btn-list__item">
                <ButtonPrimary
                    btnLabel="Blocks"
                    isActive={true}
                ></ButtonPrimary>
            </li>
            <li className="btn-list__item">
                <ButtonPrimary btnLabel="Templates"></ButtonPrimary>
            </li>
        </ul>
    );
};

export default ButtonList;
