const OutputGrid = ({ gridStyles, gridItemArray }) => {
    return (
        <div
            className="output-display__grid-container"
            style={gridStyles}
        >
            {gridItemArray}
        </div>
    );
};

export default OutputGrid;
