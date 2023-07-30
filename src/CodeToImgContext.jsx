// hooks
import React, { useContext, useState } from "react";

// contexts
const codeToImgContext = React.createContext();
const updateValuesContext = React.createContext();

// data
import containerStyles from "./data/containerStyles.json";
import containerShadowStyles from "./data/containerShadowStyles.json";
import backgroundStyles from "./data/backgroundStyles.json";

// gets input values
export function useCodeToImg() {
    return useContext(codeToImgContext);
}

// passes input values to children
export function useUpdateValues() {
    return useContext(updateValuesContext);
}

export function CodeToImgProvider({ children }) {
    // default state for container style
    // ===========================
    const [containerStyleState, setContainerStyleState] = useState(containerStyles);

    // container style function that sets active container styles on click
    const handleContainerStyle = (optionId) => {
        const updateUserOption = containerStyleState.map((option) => ({
            ...option,
            active: option.index === optionId,
        }));
        setContainerStyleState(updateUserOption);
    };

    // default state for shadow style
    // ===========================
    const [containerShadowState, setContainerShadowState] = useState(containerShadowStyles);

    // box-shadow style function that sets active box-shadow styles on click
    const handleContainerShadow = (optionId) => {
        const updateUserOption = containerShadowState.map((option) => ({
            ...option,
            active: option.index === optionId,
        }));
        setContainerShadowState(updateUserOption);
    };

    // default state for background styles
    // ===========================
    const [backgroundStyleState, setBackgroundStyleState] = useState(backgroundStyles);

    // background style function that sets active background styles on click
    const handleBackground = (optionId) => {
        const updateUserOption = backgroundStyleState.map((option) => ({
            ...option,
            active: option.index === optionId,
        }));
        setBackgroundStyleState(updateUserOption);
    };

    // values of all states passed through the context value
    const contextValues = {
        containerStyles: containerStyleState,
        BoxShadowStyles: containerShadowState,
        backgroundStyles: backgroundStyleState,
    };

    // all setState methods passed through the context value
    const contextUpdate = {
        handleContainerStyle: handleContainerStyle,
        handleContainerShadow: handleContainerShadow,
        handleBackground: handleBackground,
    };

    return (
        <codeToImgContext.Provider value={contextValues}>
            <updateValuesContext.Provider value={contextUpdate}>{children}</updateValuesContext.Provider>
        </codeToImgContext.Provider>
    );
}
