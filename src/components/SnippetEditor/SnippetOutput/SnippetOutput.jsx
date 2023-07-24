// hooks
import { useState } from "react";
import { useParams } from "react-router-dom";

// context
import { useSnippetEdit } from "../../../SnippetEditorContext";

// data
import elemData from "../../../data/elements.json";

// styles
import styles from "./SnippetOutput.module.scss";

export default function SnippetOutput() {
    // handle snippet values
    // ===========================
    const inputValues = useSnippetEdit();

    // handle initial snippet render
    // ===========================
    const params = useParams(); // id passed to new page via router
    const elemMatch = elemData.find((elem) => elem.id == params.id); // gets the json object that matches the id passed via param

    // if there is no element in the data that matches the param id
    if (!elemMatch) {
        console.log("No Matching Element"); // Handle case when the object with the target ID is not found
    }

    // destructure stored props from json
    // const baseStyles = elemMatch.style;

    // handle hover state
    // ===========================
    const [isHovered, setIsHovered] = useState(false);

    // cursor enters element
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // cursor exits element
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // Colors
    // ===========================
    // Value set with color picker (has default value set in json object)
    const colorPrimary = `${inputValues[2]}`;
    // Value is tinted color picker value
    const colorSecondary = `${inputValues[6]}`;
    // Value is based on if color picker value is a bright or dark value
    const colorFont = `${inputValues[5]}`;

    // Editable Styles
    // ===========================
    const editableStyles = {
        paddingInline: `${inputValues[0]}rem`,
        paddingBlock: `${inputValues[1]}rem`,
        background: `${colorPrimary}`,
        borderRadius: `${inputValues[3]}rem`,
        fontSize: `${inputValues[4]}rem`,
        color: `${colorFont}`,
    };

    // Base Styles
    // ===========================
    const baseStyles = {
        ...editableStyles,
        ...elemMatch.baseStyles,
        // optional styles with dynamic color
        border: `${elemMatch.baseStyles.borderWidth ? elemMatch.baseStyles.borderWidth : "0px"} ${elemMatch.baseStyles.borderStyle ? elemMatch.baseStyles.borderStyle : "0px"} ${elemMatch.baseStyles.borderColor ? colorSecondary : ""}`,
        boxShadow: `${elemMatch.baseStyles.boxShadowX ? elemMatch.baseStyles.boxShadowX : "0px"} ${elemMatch.baseStyles.boxShadowY ? elemMatch.baseStyles.boxShadowY : "0px"} ${elemMatch.baseStyles.boxShadowBlur ? elemMatch.baseStyles.boxShadowBlur : "0px"} ${elemMatch.baseStyles.boxShadowSpread ? elemMatch.baseStyles.boxShadowSpread : "0px"} ${elemMatch.baseStyles.boxShadowColor ? colorSecondary : ""}`,
    };

    // Hover Styles
    // ===========================
    const hoverStyles = {
        ...editableStyles,
        ...elemMatch.hoverStyles,
        // optional styles with dynamic color
        border: `${elemMatch.hoverStyles.borderWidth ? elemMatch.hoverStyles.borderWidth : "0px"} ${elemMatch.hoverStyles.borderStyle ? elemMatch.hoverStyles.borderStyle : "0px"} ${elemMatch.hoverStyles.borderColor ? colorSecondary : ""}`,
        boxShadow: `${elemMatch.hoverStyles.boxShadowX ? elemMatch.hoverStyles.boxShadowX : "0px"} ${elemMatch.hoverStyles.boxShadowY ? elemMatch.hoverStyles.boxShadowY : "0px"} ${elemMatch.hoverStyles.boxShadowBlur ? elemMatch.hoverStyles.boxShadowBlur : "0px"} ${elemMatch.hoverStyles.boxShadowSpread ? elemMatch.hoverStyles.boxShadowSpread : "0px"} ${elemMatch.hoverStyles.boxShadowColor ? colorSecondary : ""}`,
    };

    return (
        <section className={styles.SnippetOutput}>
            <h3 className={styles.SnippetLabel}>
                ID <span className={styles.SnippetID}>001</span>
            </h3>
            <div className={styles.SnippetDisplay}>
                <a
                    className={styles.SnippetElem}
                    style={isHovered ? hoverStyles : baseStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {elemMatch.label}
                </a>
            </div>
        </section>
    );
}
