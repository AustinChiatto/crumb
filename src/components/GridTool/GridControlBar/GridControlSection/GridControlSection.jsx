// hooks
import { useGridControl, useUpdateInput } from "../../../../GridControlContext";
// components
import GridControlInput from "../GridControlInput/GridControlInput";

// define component
const GridControlSection = () => {
    const inputValues = useGridControl();
    const updateInput = useUpdateInput();
    // define labels for inputs
    const colLabel = "Column",
        rowLabel = "Row",
        gapLabel = "Gap";

    return (
        <>
            <div className="grid-control__section">
                <div className="grid-control__item">
                    <h3 className="grid-control__label">{colLabel}</h3>
                    <GridControlInput
                        index={0}
                        value={inputValues[0]}
                        updateInput={updateInput}
                    ></GridControlInput>
                </div>
                <div className="grid-control__item">
                    <h3 className="grid-control__label">{rowLabel}</h3>
                    <GridControlInput
                        index={1}
                        value={inputValues[1]}
                        updateInput={updateInput}
                    ></GridControlInput>
                </div>
            </div>
            <div className="grid-control__section">
                <div className="grid-control__item">
                    <h3 className="grid-control__label">{gapLabel}</h3>
                    <GridControlInput
                        index={2}
                        value={inputValues[2]}
                        updateInput={updateInput}
                    ></GridControlInput>
                </div>
            </div>
        </>
    );
};

export default GridControlSection;
