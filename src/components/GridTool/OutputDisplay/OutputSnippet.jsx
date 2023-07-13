import { useRef } from "react";
import { useGridControl } from "../../../GridControlContext";
import ButtonPrimary from "../../global/ButtonPrimary/ButtonPrimary";

// Declare Component
// ===========================
// Explanation : renders the code snippet that makes up the grid to the screen
const OutputSnippet = () => {
    // get the inputValues from the GridControlContext
    const inputValues = useGridControl();
    // create a new ref object with value of null - will store code snippet for copy to clipboard
    const copyTargetRef = useRef(null);

    // Displayed Snippet
    // ===========================
    // ? I would like to make this prettier in the code base - look into white space styling
    // stores the snippet in a variable to be called later during the handleCopy
    const displayedSnippet = `
.parent {
    grid-template-columns: repeat(${inputValues[0]}, 1fr);
    grid-template-rows: repeat(${inputValues[1]}, 1fr);
    gap: ${inputValues[2]}px;
}
    `;

    // Copy Snippet to Clipboard
    // ===========================
    function handleCopy() {
        // Copy the stored value declared above to the clipboard
        navigator.clipboard.writeText(displayedSnippet);
    }

    return (
        <div className="snippet">
            <ButtonPrimary
                btnLabel={"Copy Code"}
                event={handleCopy}
            ></ButtonPrimary>
            <div className="snippet__wrapper">
                <ul className="snippet__browser-actions">
                    <li className="snippet__browser-action"></li>
                    <li className="snippet__browser-action"></li>
                    <li className="snippet__browser-action"></li>
                </ul>
                <div className="snippet__container">
                    <pre>
                        <code ref={copyTargetRef}>{displayedSnippet}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default OutputSnippet;
