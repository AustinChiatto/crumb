// styles
import styles from "./OutputDisplay.module.scss";

const OutputGrid = ({ gridStyles, gridItemArray }) => {
    return (
        <div
            className={styles.OutputGrid}
            style={gridStyles}
        >
            {gridItemArray}
        </div>
    );
};

export default OutputGrid;
