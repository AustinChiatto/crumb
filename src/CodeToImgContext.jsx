// hooks
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

// contexts
const codeToImgContext = React.createContext();
const updateValuesContext = React.createContext();

// gets input values
export function useCodeToImg() {
    return useContext(codeToImgContext);
}

// passes input values to children
export function useUpdateValues() {
    return useContext(updateValuesContext);
}

export function CodeToImgProvider({ children }) {
    // default values
    const containerStyle = 1;
    const propPaddingInline = 1;
    const propPaddingBlock = 1;
    const propBorderRadius = 1;
    const shadowStyle = 1;
    const backgroundStyle = 1;
    // state of image based on values set in sidebar of codeToImg tool
    const [inputValue, setInputValue] = useState([containerStyle, propPaddingInline, propPaddingBlock, propBorderRadius, shadowStyle, backgroundStyle]);

    // toggle active state for clicked value
    // update property numerical values
    function updateValues(index, active) {}

    return (
        <codeToImgContext.Provider value={"value"}>
            <updateValuesContext.Provider value={"value"}>{children}</updateValuesContext.Provider>
        </codeToImgContext.Provider>
    );
}

// controller
// loop through array for each group of buttons
// check which one is active
// get styles from active button
// pass values to image container
// if new button is pressed, set it to active
