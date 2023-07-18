// hooks
import { useState } from "react";
import { useSnippetEdit, useUpdateValues } from "../../../SnippetEditorContext";
import { HexColorPicker } from "react-colorful";

// icons
import iconPaddingHorizontal from "../../../assets/icons/icon_padding-horizontal.svg";
import iconPaddingVertical from "../../../assets/icons/icon_padding-vertical.svg";
import iconBorderRadius from "../../../assets/icons/icon_border-radius.svg";
import iconFontSize from "../../../assets/icons/icon_font-size.svg";

// styles
import styles from "./SnippetInput.module.scss";
import SnippetProperty from "./SnippetProperty/SnippetProperty";

export default function SnippetInput() {
    // contexts
    const inputValues = useSnippetEdit();
    const updateInput = useUpdateValues();

    const { updateValues, updateColorValue } = updateInput;

    return (
        <section className={styles.SnippetInput}>
            {/* props */}
            <div className={styles.SnippetProperties}>
                <h2>Properties</h2>
                <div className={styles.PropertiesContainer}>
                    <ul className={styles.PropertiesList}>
                        <SnippetProperty
                            index={0}
                            value={inputValues[0]}
                            updateValue={updateValues}
                            icon={iconPaddingHorizontal}
                        />
                        <SnippetProperty
                            index={1}
                            value={inputValues[1]}
                            updateValue={updateValues}
                            icon={iconPaddingVertical}
                        />
                        <SnippetProperty
                            index={3}
                            value={inputValues[3]}
                            updateValue={updateValues}
                            icon={iconBorderRadius}
                        />
                        <SnippetProperty
                            index={4}
                            value={inputValues[4]}
                            updateValue={updateValues}
                            icon={iconFontSize}
                        />
                    </ul>
                </div>
            </div>
            {/* color */}
            <div className={`${styles.SnippetColor} snippet-color`}>
                <HexColorPicker
                    color={inputValues[2]}
                    onChange={updateColorValue}
                />
            </div>
        </section>
    );
}
