import { useState } from "react";
import "./grid-control-bar.css";
import GridControlSection from "./GridControlSection/GridControlSection";

const GridControlBar = () => {
    const [controlOption, setControlOption] = useState();

    return (
        <section className="grid-control card">
            <GridControlSection className="grid-control__section"></GridControlSection>
        </section>
    );
};

export default GridControlBar;
