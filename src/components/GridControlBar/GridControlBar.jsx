import { useState } from "react";
import "./grid-control-bar.css";

const GridControlBar = () => {
    const [controlOption, setControlOption] = useState();

    return (
        <section className="grid-control-bar card">
            <div></div>
        </section>
    );
};

export default GridControlBar;
