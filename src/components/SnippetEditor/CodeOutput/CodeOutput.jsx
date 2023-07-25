// hooks
import { useState } from "react";
import { useParams } from "react-router-dom";

// context
import { useSnippetEdit } from "../../../SnippetEditorContext";

// data
import elemData from "../../../data/elements.json";

// components
import ButtonPrimary from "../../global/ButtonPrimary/ButtonPrimary";
import CodeBlock from "../../global/CodeBlock/CodeBlock";

// styles
import styles from "./CodeOutput.module.scss";
import github from "react-syntax-highlighter/dist/esm/styles/hljs/github";

export default function CodeOutput() {
    // Handle displayed code
    // ===========================
    const [codeType, setCodeType] = useState([
        { id: 1, isActive: false, label: "HTML" },
        { id: 2, isActive: true, label: "CSS" },
        // Add more button objects as needed
    ]);

    // Handle button click
    const handleButtonClick = (codeTypeId) => {
        const updatedCodeType = codeType.map((codeType) => (codeType.id === codeTypeId ? { ...codeType, isActive: true } : { ...codeType, isActive: false }));
        setCodeType(updatedCodeType);
    };

    // Get data for matching element
    // ===========================
    const params = useParams(); // id passed to new page via router
    const elemMatch = elemData.find((elem) => elem.id == params.id); // gets the json object that matches the id passed via param

    // handle missing element
    if (!elemMatch) {
        console.log("No Matching Element");
    }

    // Format ID
    // ===========================
    // adds 0 to the beginning of the string until it is 3 characters long
    const formattedId = elemMatch.id.toString().padStart(3, "0");

    // Displayed Code
    // ===========================
    // context that hold input values
    const inputValues = useSnippetEdit();

    function shadeHexColor(color, percent) {
        let f = parseInt(color.slice(1), 16),
            t = percent < 0 ? 0 : 255,
            p = percent < 0 ? percent * -1 : percent,
            R = f >> 16,
            G = (f >> 8) & 0x00ff,
            B = f & 0x0000ff;
        return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
    }

    const colorSecondary = shadeHexColor(inputValues[2], -0.5);

    // Displayed CSS
    const cssSnippet = `/* base style */
.button-${formattedId} {
    padding-inline: ${inputValues[0]}rem;
    padding-block: ${inputValues[1]}rem;
    border-radius: ${inputValues[3]}rem;
    background: ${inputValues[2]};
    font-size: ${inputValues[4]}rem;
    color: ${inputValues[5]};
    ${elemMatch.baseStyles.boxShadowColor ? `box-shadow: ${elemMatch.baseStyles.boxShadowX ? elemMatch.baseStyles.boxShadowX : "0px"} ${elemMatch.baseStyles.boxShadowY ? elemMatch.baseStyles.boxShadowY : "0px"} ${elemMatch.baseStyles.boxShadowBlur ? elemMatch.baseStyles.boxShadowBlur : "0px"} ${elemMatch.baseStyles.boxShadowSpread ? elemMatch.baseStyles.boxShadowSpread : "0px"} ${elemMatch.baseStyles.boxShadowColor ? colorSecondary : ""};` : ""}
    ${elemMatch.baseStyles.borderStyle ? `border: ${elemMatch.baseStyles.borderWidth ? elemMatch.baseStyles.borderWidth : "0px"} ${elemMatch.baseStyles.borderStyle ? elemMatch.baseStyles.borderStyle : "0px"} ${elemMatch.baseStyles.borderColor ? colorSecondary : ""};` : ""}
    ${elemMatch.baseStyles.transition ? `transition: ${elemMatch.baseStyles.transition};` : ""}
}

/* hover style */
.button-${formattedId}:hover {
    ${elemMatch.hoverStyles.borderRadius ? `border-radius: ${elemMatch.hoverStyles.borderRadius};` : ""}
    ${elemMatch.hoverStyles.transform ? `transform: ${elemMatch.hoverStyles.transform};` : ""}
    ${elemMatch.hoverStyles.boxShadowColor ? `box-shadow: ${elemMatch.hoverStyles.boxShadowX ? elemMatch.hoverStyles.boxShadowX : "0px"} ${elemMatch.hoverStyles.boxShadowY ? elemMatch.hoverStyles.boxShadowY : "0px"} ${elemMatch.hoverStyles.boxShadowBlur ? elemMatch.hoverStyles.boxShadowBlur : "0px"} ${elemMatch.hoverStyles.boxShadowSpread ? elemMatch.hoverStyles.boxShadowSpread : "0px"} ${elemMatch.hoverStyles.boxShadowColor ? colorSecondary : ""};` : ""}
    ${elemMatch.hoverStyles.borderStyle ? `border: ${elemMatch.hoverStyles.borderWidth ? elemMatch.hoverStyles.borderWidth : "0px"} ${elemMatch.hoverStyles.borderStyle ? elemMatch.hoverStyles.borderStyle : "0px"} ${elemMatch.hoverStyles.borderColor ? colorSecondary : ""};` : ""}
}`;

    // Displayed HTML
    const htmlSnippet = `<!-- button tag -->
<button class="button-${formattedId}">${elemMatch.label}</button>
    `;

    return (
        <section className={`${styles.CodeOutput} card`}>
            <ul className={styles.CodeOptions}>
                <li className={styles.LanguageOptions}>
                    {codeType.map((codeType) => (
                        <ButtonPrimary
                            key={codeType.id}
                            btnLabel={codeType.label}
                            isActive={codeType.isActive}
                            onClick={() => handleButtonClick(codeType.id)}
                        ></ButtonPrimary>
                    ))}
                </li>
                <li>
                    <ButtonPrimary btnLabel="Copy Code"></ButtonPrimary>
                </li>
            </ul>
            <div className={styles.OutputCode}>
                <CodeBlock
                    code={codeType[0].isActive ? htmlSnippet : cssSnippet}
                    language={codeType[0].isActive ? "html" : "css"}
                    theme={github}
                ></CodeBlock>
            </div>
        </section>
    );
}
