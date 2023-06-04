import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import "./side-bar.css";
import { useState } from "react";

const SideBar = () => {
    const [buttons, setButtons] = useState([
        {
            id: 1,
            isActive: true,
            label: "Blocks",
        },
        {
            id: 2,
            isActive: false,
            label: "Templates",
        },
    ]);

    return (
        <aside className="side-bar card">
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
            <ul className="toolbox">
                <li className="toolbox__block toolbox__block--1x1"></li>
                <li className="toolbox__block toolbox__block--2x1"></li>
                <li className="toolbox__block toolbox__block--1x2"></li>
                <li className="toolbox__block toolbox__block--2x2"></li>
            </ul>
        </aside>
    );
};

export default SideBar;
