// hooks
import React, { useContext, useState } from "react";

// data
import elemData from "./data/elements.json";

// contexts
const snippetEditorContext = React.createContext();
const updateValuesContext = React.createContext();

// gets input values
export function useSnippetEdit() {
    return useContext(snippetEditorContext);
}

// passes input values to children
export function useUpdateValues() {
    return useContext(updateValuesContext);
}

export function SnippetEditorProvider({ children }) {
    // Property Default Values
    // ===========================

    // gets the data for the specific element that matches the id passed in
    const elemMatch = elemData.find((element) => element.id === 1);

    const paddingInline = parseFloat(elemMatch.style.paddingInline);
    const paddingBlock = parseFloat(elemMatch.style.paddingBlock);
    const borderRadius = parseFloat(elemMatch.style.borderRadius);
    const fontSize = parseFloat(elemMatch.style.fontSize);

    const [inputValue, setInputValue] = useState([paddingInline, paddingBlock, borderRadius, fontSize]);

    function updateValues(index, operation) {
        setInputValue((prevValues) => {
            if (operation === "add") {
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

    // Process
    // ===========
    // 1. Get the ID of the snippet clicked on
    // 2. Store the ID in the editor context
    // 3. Change page to the editor
    // 4. Render snippet on editor page with initial values pulled from elements.json
    // 5. Edit values with inputs on editor page
    // 6. pass new values to button render through context and state
    // 7. pass values to code output

    return (
        <snippetEditorContext.Provider value={inputValue}>
            <updateValuesContext.Provider value={updateValues}>{children}</updateValuesContext.Provider>
        </snippetEditorContext.Provider>
    );
}
