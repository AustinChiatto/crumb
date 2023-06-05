import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import GridControlInput from "../GridControlInput/GridControlInput";

import { useState } from "react";

const GridControlSection = () => {
    let defInputValue = 0;

    const [inputValue, setInputValue] = useState(defInputValue);

    return (
        <>
            <div className="grid-control__section">
                <div className="grid-control__item">
                    <h3 className="grid-control__label">Column</h3>
                    <GridControlInput inputValue={inputValue}></GridControlInput>
                </div>
                <div className="grid-control__item">
                    <h3 className="grid-control__label">Row</h3>
                    <GridControlInput inputValue={inputValue}></GridControlInput>
                </div>
            </div>
            <div className="grid-control__section">
                <div className="grid-control__item">
                    <h3 className="grid-control__label">Gap</h3>
                    <GridControlInput inputValue={inputValue}></GridControlInput>
                </div>
            </div>
        </>
    );
};

export default GridControlSection;
