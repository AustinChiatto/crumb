import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import "./output-display.css";

import { useGridControl } from "../../GridControlContext";
import GridItem from "./GridItem";
import OutputGrid from "./OutputGrid";
import OutputSnippet from "./OutputSnippet";

// Define Component
// ===========================
const OutputDisplay = () => {
    const inputValues = useGridControl();

    // Handle Grid Item Rendering
    // ===========================
    // define styles for the grid container
    // styles change based on the value of the
    const gridStyles = {
        gridTemplateColumns: `repeat(${inputValues[0]}, 1fr)`,
        gridTemplateRows: `repeat(${inputValues[1]}, 1fr)`,
        gap: `${inputValues[2]}px`,
    };

    // calculate how many total grid items there needs to be
    const totalGridItemCount = inputValues[0] * inputValues[1];
    // add a GridItem component to and array based on the length of the calculated value
    const gridItemArray = Array.from({ length: totalGridItemCount }, () => <GridItem />);

    // Conditionally Render Grid or Code
    // ===========================

    const [active, setActive] = useState(false);

    const updateDisplayedOutput = () => {
        setActive((prevActive) => !prevActive);
    };

    // Exported Component
    // ===========================
    return (
        <section className="output-display card">
            <ul className="btn-list--wide">
                <li className="btn-list__item">
                    <ButtonPrimary
                        btnLabel="Hide Children"
                        isActive={true}
                    ></ButtonPrimary>
                </li>
                <li className="btn-list__item">
                    <ButtonPrimary
                        btnLabel="Get CSS"
                        isActive={active}
                        event={updateDisplayedOutput}
                    ></ButtonPrimary>
                </li>
            </ul>
            {active ? (
                <OutputSnippet></OutputSnippet>
            ) : (
                <OutputGrid
                    gridStyles={gridStyles}
                    gridItemArray={gridItemArray}
                ></OutputGrid>
            )}
        </section>
    );
};

export default OutputDisplay;
