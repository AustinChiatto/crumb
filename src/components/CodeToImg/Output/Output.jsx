// hooks
import { useRef } from "react";

// convert component to image
import { toPng } from "html-to-image";

// styles
import styles from "./Output.module.scss";
import OutputDimensions from "./OutputDimensions/OutputDimensions";
import OutputDisplay from "./OutputDisplay/OutputDisplay";
import OutputOptions from "./OutputOptions/OutputOptions";

export default function Output() {
    const toImageRef = useRef(null);

    const htmlToImageConvert = () => {
        toPng(toImageRef.current, { cacheBust: false })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "my-image-name.png";
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
            <OutputDisplay toImageRef={toImageRef} />
            <OutputOptions htmlToImageConvert={htmlToImageConvert} />
        </section>
    );
}
