// hooks
import { useRef, useState } from "react";

// convert component to image
import { toPng } from "html-to-image";

// styles
import styles from "./Output.module.scss";
import OutputDimensions from "./OutputDimensions/OutputDimensions";
import OutputDisplay from "./OutputDisplay/OutputDisplay";
import OutputOptions from "./OutputOptions/OutputOptions";

export default function Output() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    // reference for output display
    const toImageRef = useRef(null);

    // function using html-to-image library to convert
    // the referenced component into a png
    const htmlToImageConvert = () => {
        toPng(toImageRef.current, { cacheBust: false })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "my-code.png";
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <section className={`${styles.Output} card`}>
            <OutputDimensions />
            <OutputDisplay
                toImageRef={toImageRef}
                codeLang={selectedOption}
            />
            <OutputOptions
                htmlToImageConvert={htmlToImageConvert}
                selectedOption={selectedOption}
                handleOptionChange={handleOptionChange}
            ></OutputOptions>
        </section>
    );
}
