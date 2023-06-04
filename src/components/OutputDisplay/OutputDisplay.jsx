import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import "./output-display.css";

const OutputDisplay = () => {
    const [buttons, setButtons] = useState([
        {
            id: 1,
            isActive: true,
            label: "Show Grid",
        },
        {
            id: 2,
            isActive: false,
            label: "Get Code",
        },
    ]);

    return (
        <section className="output-display card">
            <ul className="btn-list--wide">
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
            <div className="output-display__grid-container">
                <div className="grid-test-item"></div>
                <div className="grid-test-item"></div>
                <div className="grid-test-item"></div>
                <div className="grid-test-item"></div>
                <div className="grid-test-item"></div>
            </div>
        </section>
    );
};

export default OutputDisplay;
