// hooks
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

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
    // router params (snippet id)
    const params = useParams();

    // Property Default Values
    // ===========================
    // gets the data for the specific element that matches the id passed in
    const elemMatch = elemData.find((element) => element.id == params.id);

    // useState for color picker
    const [colorPicker, setColorPicker] = useState(elemMatch.color.primary);

    const paddingInline = parseFloat(elemMatch.editableStyles.paddingInline);
    const paddingBlock = parseFloat(elemMatch.editableStyles.paddingBlock);
    const colorPrimary = colorPicker;
    const borderRadius = parseFloat(elemMatch.editableStyles.borderRadius);
    const fontSize = parseFloat(elemMatch.editableStyles.fontSize);
    const colorFont = elemMatch.color.font;
    const colorSecondary = elemMatch.color.secondary;

    const [inputValue, setInputValue] = useState([paddingInline, paddingBlock, colorPrimary, borderRadius, fontSize, colorFont, colorSecondary]);

    // index: id of the input - set above in the state array
    // operation: passed to the context via prop for the check
    // newColor: used specifically to get the color information from the picker
    function updateValues(index, operation, newColor) {
        setInputValue((prevValues) => {
            if (operation === "add") {
                const newValue = prevValues[index] + 0.25;
                const newValues = [...prevValues];
                newValues[index] = newValue;
                return newValues;
            } else if (operation === "sub" && prevValues[index] > 0) {
                const newValue = prevValues[index] - 0.25;
                const newValues = [...prevValues];
                newValues[index] = newValue;
                return newValues;
            } else if (operation === "colorChange") {
                const newValues = [...prevValues];
                newValues[index] = newColor;
                return newValues;
            } else {
                return prevValues;
            }
        });
    }

    // function to update color

    const contextValue = {
        updateValues: updateValues,
        updateColorValue: setColorPicker,
    };

    return (
        <snippetEditorContext.Provider value={inputValue}>
            <updateValuesContext.Provider value={contextValue}>{children}</updateValuesContext.Provider>
        </snippetEditorContext.Provider>
    );
}
