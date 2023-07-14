import React, { useState } from "react";
import styles from "./SnippetCard.module.scss";

export default function SnippetCard({ id, elementStyle, label }) {
    // adds 0 to the beginning of the string until it is 3 characters long
    const formattedId = id.toString().padStart(3, "0");
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <article className={styles.SnippetCard}>
            <h4 className={styles.SnippetLabel}>
                ID <span className={styles.SnippetID}>{formattedId}</span>
            </h4>
            <div className={styles.SnippetDisplay}>
                <a
                    style={{
                        ...elementStyle, // Spread the style properties from elementStyle
                    }}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                >
                    {label}
                </a>
            </div>
        </article>
    );
}
