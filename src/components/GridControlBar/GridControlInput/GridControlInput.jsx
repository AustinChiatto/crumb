const GridControlInput = ({ handleInputValue, inputValue }) => {
    return (
        <div className="grid-control__inputs">
            <div className="grid-control__btn">-</div>
            <div className="grid-control__count">{inputValue}</div>
            <div
                className="grid-control__btn"
                onClick={handleInputValue}
            >
                +
            </div>
        </div>
    );
};

export default GridControlInput;
