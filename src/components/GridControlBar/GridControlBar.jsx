import "./grid-control-bar.css";
import GridControlSection from "./GridControlSection/GridControlSection";

const GridControlBar = () => {
    return (
        <section className="grid-control card">
            <GridControlSection className="grid-control__section"></GridControlSection>
        </section>
    );
};

export default GridControlBar;
