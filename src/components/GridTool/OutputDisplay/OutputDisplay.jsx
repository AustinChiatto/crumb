// hooks
import { useState } from "react";

// context
import { useGridControl } from "../../../GridControlContext";

// styles
import styles from "./OutputDisplay.module.scss";

// components
import GridItem from "./GridItem";
import OutputGrid from "./OutputGrid";
import OutputSnippet from "./OutputSnippet";
import ButtonPrimary from "../../global/ButtonPrimary/ButtonPrimary";

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

    // button states
    const [btnStates, setBtnStates] = useState([
        { id: 1, isActive: true, label: "Show Grid" },
        { id: 2, isActive: false, label: "View Code" },
        // Add more button objects as needed
    ]);

    // Handle button click
    const handleButtonClick = (btnStateId) => {
        const updatedBtnState = btnStates.map((btnState) => (btnState.id === btnStateId ? { ...btnState, isActive: true } : { ...btnState, isActive: false }));
        setBtnStates(updatedBtnState);
    };

    // Exported Component
    // ===========================
    return (
        <section className={`${styles.OutputDisplay} card`}>
            <ul className={styles.ButtonList}>
                {btnStates.map((btnState) => (
                    <li>
                        <ButtonPrimary
                            key={btnState.id}
                            btnLabel={btnState.label}
                            isActive={btnState.isActive}
                            onClick={() => handleButtonClick(btnState.id)}
                        ></ButtonPrimary>
                    </li>
                ))}
            </ul>
            {btnStates[1].isActive ? (
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
