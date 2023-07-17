// hooks
import { useState } from "react";
import { useParams } from "react-router-dom";

// context
import { useSnippetEdit } from "../../../SnippetEditorContext";

// styles
import styles from "./SnippetOutput.module.scss";

export default function SnippetOutput() {
    const inputValues = useSnippetEdit();
    const params = useParams();

    const [isHovered, setIsHovered] = useState(false);

    // handle hover state
    // ===========================
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // add hover styles if cursor on element
    const hoverStyles = isHovered ? { transform: `translateY(${inputValues[1] * 0.25}rem)`, boxShadow: `0rem 0rem 0rem 0rem #513f99` } : {};

    // base element styling
    // ===========================
    const inlineStyles = {
        paddingInline: `${inputValues[0]}rem`,
        paddingBlock: `${inputValues[1]}rem`,
        background: "#974ec2",
        boxShadow: `0px ${inputValues[1] * 0.25}rem 0px 0px #513f99`,
        borderRadius: `${inputValues[2]}rem`,
        color: "#fff",
        fontSize: `${inputValues[3]}rem`,
        transition: "transform, box-shadow, 50ms linear",
        cursor: "pointer",
        // spread hover styles if hovered
        ...hoverStyles,
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
                    {params.id}
                </a>
            </div>
        </section>
    );
}
