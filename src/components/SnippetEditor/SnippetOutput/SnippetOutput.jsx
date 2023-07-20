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
        // inputValues set in context as state
        paddingInline: `${inputValues[0]}rem`,
        paddingBlock: `${inputValues[1]}rem`,
        background: `${inputValues[2]}`,
        borderRadius: `${inputValues[3]}rem`,
        fontSize: `${inputValues[4]}rem`,
        color: `${inputValues[5]}`,
        cursor: "pointer",
        ...hoverStyles, // spread hover styles if hovered
    };

    return (
        <section className={styles.SnippetOutput}>
            <h3 className={styles.SnippetLabel}>
                ID <span className={styles.SnippetID}>001</span>
            </h3>
            <div className={styles.SnippetDisplay}>
                <a
                    style={inlineStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Click
                </a>
            </div>
        </section>
    );
}
