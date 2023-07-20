// hooks
import React, { useState } from "react";

// context
import { useSnippetEdit } from "../../../../SnippetEditorContext";

// data
import elemData from "../../../../data/elements.json";

// styles
import styles from "./SnippetCard.module.scss";

export default function SnippetCard({ id, label }) {
    // adds 0 to the beginning of the string until it is 3 characters long
    const formattedId = id.toString().padStart(3, "0");
    // handle snippet values
    // ===========================
    const inputValues = useSnippetEdit(); // values of edit controls from context

    // handle initial snippet render
    // ===========================
    const elemMatch = elemData.find((elem) => elem.id == id); // gets the json object that matches the id passed via param

    // if there is no element in the data that matches the param id
    if (!elemMatch) {
        console.log("No Matching Element"); // Handle case when the object with the target ID is not found
    }

    // destructure stored props from json
    const baseStyles = elemMatch.style;

    // handle hover state
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

    // add hover styles if cursor on element
    const hoverStyles = isHovered ? elemMatch.hovered : {};

    // set snippet values
    // ===========================
    const inlineStyles = {
        ...baseStyles,
        background: elemMatch.color.background,
        color: elemMatch.color.font,
        cursor: "pointer",
        ...hoverStyles, // spread hover styles if hovered
    };

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
                    style={inlineStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {label}
                </div>
            </div>
        </a>
    );
}
