// hooks
import React, { useContext, useState } from "react";

// contexts
const GridControlContext = React.createContext();
const updateInputContext = React.createContext();

// used to store the value of the grid control component
export function useGridControl() {
    return useContext(GridControlContext);
}

// passes the value of the grid control to the grid output component
export function useUpdateInput() {
    return useContext(updateInputContext);
}

export function GridControlProvider({ children }) {
    const defaultColumnValue = 6;
    const defaultRowValue = 3;
    const defaultGapValue = 8;
    // define state & set the default state to be the default state passed in through prop
    const [inputValue, setInputValue] = useState([defaultColumnValue, defaultRowValue, defaultGapValue]);

    // function that updates the input based on values and an operation argument
    // operation argument states if the operation is addition or subtraction
    function updateInput(index, operation) {
        setInputValue((prevValues) => {
            if (operation === "add" && prevValues[index] < 16) {
                const newValue = prevValues[index] + 1;
                const newValues = [...prevValues];
                newValues[index] = newValue;
                return newValues;
            } else if (operation === "sub" && prevValues[index] > 0) {
                const newValue = prevValues[index] - 1;
                const newValues = [...prevValues];
                newValues[index] = newValue;
                return newValues;
            } else {
                return prevValues;
            }
        });
    }

    // ==== Process ====
    // 1. create an empty array
    // 2. when updateInput is run - update array object to include or remove a new element
    // 3. use map to render array of items

    return (
        <GridControlContext.Provider value={inputValue}>
            <updateInputContext.Provider value={updateInput}>{children}</updateInputContext.Provider>
        </GridControlContext.Provider>
    );
}
