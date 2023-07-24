// hooks
import { useState } from "react";

// data
import elemData from "../../../../data/elements.json";

// styles
import styles from "./SnippetCard.module.scss";

export default function SnippetCard({ id }) {
    // Find matching element
    // ===========================
    const elemMatch = elemData.find((elem) => elem.id == id); // gets the json object that matches the id passed via param

    // if there is no element in the data that matches the param id
    if (!elemMatch) {
        console.log("No Matching Element"); // Handle case when the object with the target ID is not found
    }

    // Handle Hover State
    // ===========================
    const [isHovered, setIsHovered] = useState(false); // state for hover check

    // cursor enters element
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // cursor exits element
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // Base Styles
    // ===========================
    const baseStyles = {
        ...elemMatch.editableStyles, // editable styles from the json of the matching element
        ...elemMatch.baseStyles, // base styles from the json of the matching element
        // optional styles set in json
        background: elemMatch.color.primary,
        color: elemMatch.color.font,
        borderColor: elemMatch.baseStyles.border ? elemMatch.color.secondary : {},
        boxShadow: `${elemMatch.baseStyles.boxShadowX ? elemMatch.baseStyles.boxShadowX : "0px"} ${elemMatch.baseStyles.boxShadowY ? elemMatch.baseStyles.boxShadowY : "0px"} ${elemMatch.baseStyles.boxShadowBlur ? elemMatch.baseStyles.boxShadowBlur : "0px"} ${elemMatch.baseStyles.boxShadowSpread ? elemMatch.baseStyles.boxShadowSpread : "0px"} ${elemMatch.baseStyles.boxShadowColor ? elemMatch.color.secondary : ""}`,
    };

    // Hover Styles
    // ===========================
    const hoverStyles = {
        ...elemMatch.editableStyles, // editable styles from the json of the matching element
        ...elemMatch.hoverStyles, // hover styles from the json of the matching element
        // optional styles set in json
        background: elemMatch.color.primary,
        color: elemMatch.color.font,
        borderColor: elemMatch.hoverStyles.border ? elemMatch.color.secondary : {},
        boxShadow: `${elemMatch.hoverStyles.boxShadowX ? elemMatch.hoverStyles.boxShadowX : "0px"} ${elemMatch.hoverStyles.boxShadowY ? elemMatch.hoverStyles.boxShadowY : "0px"} ${elemMatch.hoverStyles.boxShadowBlur ? elemMatch.hoverStyles.boxShadowBlur : "0px"} ${elemMatch.hoverStyles.boxShadowSpread ? elemMatch.hoverStyles.boxShadowSpread : "0px"} ${elemMatch.hoverStyles.boxShadowColor ? elemMatch.color.secondary : ""}`,
    };

    // Format ID
    // ===========================
    // adds 0 to the beginning of the string until it is 3 characters long
    const formattedId = id.toString().padStart(3, "0");

    return (
        <a
            // assign id from JSON to router path
            href={`/snippet-editor/${id}`}
            className={styles.SnippetCard}
        >
            <h4 className={styles.SnippetLabel}>
                ID <span className={styles.SnippetID}>{formattedId}</span>
            </h4>
            <div className={styles.SnippetDisplay}>
                <div
                    className={styles.SnippetElem}
                    style={isHovered ? hoverStyles : baseStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {elemMatch.label}
                </div>
            </div>
        </a>
    );
}
