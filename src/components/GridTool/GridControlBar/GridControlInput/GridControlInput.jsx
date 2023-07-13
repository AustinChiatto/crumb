// import { useGridControl, useUpdateInput } from "../../../GridControlContext";

// component for the number input
// pass default input value prop set in GridControlSection component
const GridControlInput = ({ index, value, updateInput }) => {
    // const gridControl = useGridControl();
    // const updateInput = useUpdateInput();

    return (
        <div className="grid-control__inputs">
            <div
                className="grid-control__btn"
                onClick={() => updateInput(index, "sub")}
            >
                -
            </div>
            <div className="grid-control__count">{value}</div>
            <div
                className="grid-control__btn"
                onClick={() => updateInput(index, "add")}
            >
                +
            </div>
        </div>
    );
};

export default GridControlInput;
