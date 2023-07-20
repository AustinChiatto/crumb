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
    // default state for container style
    // ===========================
    const [containerStyleState, setContainerStyleState] = useState([
        { key: 0, index: 0, active: true, icon: true, customStyle: { opacity: "0.85", background: "#fefefe", borderRight: "0.25rem solid #dedee0", borderBottom: "0.25rem solid #dedee0" }, containerStyle: { background: "rgba(254,254,254,0.7)", border: "0.33rem solid rgba(254,254,254,0.5)", backdropFilter: "blur(1rem)" } },
        { key: 1, index: 1, active: false, icon: true, customStyle: { opacity: "0.65", background: "#151515", borderRight: "0.25rem solid #3f3d3e", borderBottom: "0.25rem solid #3f3d3e" }, containerStyle: { background: "rgba(35,35,35,0.9)", border: "0.33rem solid #a5aab330", backdropFilter: "blur(1rem)" } },
        { key: 2, index: 2, active: false, icon: true, customStyle: { background: "#fefefe", borderRight: "0.125rem solid #1e1e1e", borderBottom: "0.125rem solid #1e1e1e" }, containerStyle: { background: "#F7F8F999", border: "0.250rem solid #3f3d3e", backdropFilter: "blur(1rem)" } },
        { key: 3, index: 3, active: false, icon: true, customStyle: { background: "#fefefe" }, containerStyle: { background: "rgba(254,254,254,0.7)", border: "none" } },
        { key: 4, index: 4, active: false, icon: true, customStyle: { background: "#3f3d3e" }, containerStyle: { background: "rgba(35,35,35,0.86)", border: "none" } },
        { key: 5, index: 5, active: false, icon: true, customStyle: { background: "#fefefe", opacity: "0.85", borderRight: "0.25rem solid #dedee0", borderBottom: "0.25rem solid #dedee0" }, containerStyle: { background: "#F7F8F999", border: "none", backdropFilter: "blur(1rem)" } },
    ]);

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
    const [containerShadowState, setContainerShadowState] = useState([
        {
            key: 0,
            index: 0,
            active: false,
            icon: true,
            customStyle: { opacity: "1", background: "#fefefe", borderRight: "0.25rem solid #dedee0", borderBottom: "0.25rem solid #dedee0", boxShadow: "none" },
            shadowStyle: { boxShadow: "none" },
        },
        {
            key: 1,
            index: 1,
            active: true,
            icon: true,
            customStyle: { opacity: "1", background: "#fefefe", borderRight: "0.25rem solid #dedee0", borderBottom: "0.25rem solid #dedee0" },
            shadowStyle: { boxShadow: `2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07)` },
        },
        {
            key: 2,
            index: 2,
            active: false,
            icon: true,
            customStyle: { opacity: "0.85", background: "#fefefe", borderRight: "0.25rem solid #dedee0", borderBottom: "0.25rem solid #dedee0", boxShadow: `0.4px 0.4px 0.7px rgba(0, 0, 0, 0.023), 0.8px 0.9px 1.5px rgba(0, 0, 0, 0.041), 1.4px 1.4px 2.5px rgba(0, 0, 0, 0.054), 2.1px 2.2px 3.8px rgba(0, 0, 0, 0.064), 3px 3.1px 5.5px rgba(0, 0, 0, 0.07), 4.3px 4.4px 7.8px rgba(0, 0, 0, 0.074), 6px 6.3px 11.1px rgba(0, 0, 0, 0.075), 8.8px 9.1px 16.1px rgba(0, 0, 0, 0.074), 13.5px 14.1px 24.8px rgba(0, 0, 0, 0.072), 24px 25px 44px rgba(0, 0, 0, 0.07)` },
            shadowStyle: { boxShadow: `0.4px 0.4px 0.7px rgba(0, 0, 0, 0.023), 0.8px 0.9px 1.5px rgba(0, 0, 0, 0.041), 1.4px 1.4px 2.5px rgba(0, 0, 0, 0.054), 2.1px 2.2px 3.8px rgba(0, 0, 0, 0.064), 3px 3.1px 5.5px rgba(0, 0, 0, 0.07), 4.3px 4.4px 7.8px rgba(0, 0, 0, 0.074), 6px 6.3px 11.1px rgba(0, 0, 0, 0.075), 8.8px 9.1px 16.1px rgba(0, 0, 0, 0.074), 13.5px 14.1px 24.8px rgba(0, 0, 0, 0.072), 24px 25px 44px rgba(0, 0, 0, 0.07)` },
        },
    ]);

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
    const [backgroundStyleState, setBackgroundStyleState] = useState([
        { key: 0, index: 0, active: true, backgroundStyle: "linear-gradient(135deg, #0061ff 0%, #60efff 100%)" },
        { key: 1, index: 1, active: false, backgroundStyle: "linear-gradient(135deg, #ef745c 0%, #34073d 100%)" },
        { key: 2, index: 2, active: false, backgroundStyle: "linear-gradient(135deg, #ff1b6b 0%, #45caff 100%)" },
        { key: 3, index: 3, active: false, backgroundStyle: "linear-gradient(135deg, #40c9ff 0%, #e81cff 100%)" },
        { key: 4, index: 4, active: false, backgroundStyle: "linear-gradient(135deg, #ffa585 0%, #ffeda0 100%)" },
        { key: 5, index: 5, active: false, backgroundStyle: "linear-gradient(135deg, #ff930f 0%, #fff95b 100%)" },
        { key: 6, index: 6, active: false, backgroundStyle: "linear-gradient(135deg, #ff0f7b 0%, #f89b29 100%)" },
        { key: 7, index: 7, active: false, backgroundStyle: "linear-gradient(135deg, #696eff 0%, #f8acff 100%)" },
        { key: 8, index: 8, active: false, backgroundStyle: "linear-gradient(135deg, #ff5858 0%, #ffc8c8 100%)" },
    ]);

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
