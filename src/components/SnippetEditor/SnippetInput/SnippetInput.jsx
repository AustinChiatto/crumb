// hooks
import { useState } from "react";
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
    const [color, setColor] = useState("#aabbcc");

    return (
        <section className={styles.SnippetInput}>
            {/* props */}
            <div className={styles.SnippetProperties}>
                <h2>Properties</h2>
                <div className={styles.PropertiesContainer}>
                    <ul className={styles.PropertiesList}>
                        <SnippetProperty
                            index={1}
                            icon={iconPaddingHorizontal}
                            defaultValue={1}
                        />
                        <SnippetProperty
                            index={2}
                            icon={iconPaddingVertical}
                            defaultValue={2}
                        />
                        <SnippetProperty
                            index={3}
                            icon={iconBorderRadius}
                            defaultValue={3}
                        />
                        <SnippetProperty
                            index={4}
                            icon={iconFontSize}
                            defaultValue={4}
                        />
                    </ul>
                </div>
            </div>
            {/* color */}
            <div className={`${styles.SnippetColor} snippet-color`}>
                <HexColorPicker
                    color={color}
                    onChange={setColor}
                />
            </div>
        </section>
    );
}
