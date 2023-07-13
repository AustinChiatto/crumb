import { GridControlProvider } from "../GridControlContext";
import GridControlBar from "../components/GridTool/GridControlBar/GridControlBar";
import OutputDisplay from "../components/GridTool/OutputDisplay/OutputDisplay";
import SideBar from "../components/GridTool/SideBar/SideBar";

export default function GridTool() {
    return (
        <div className="view-wrapper">
            <SideBar></SideBar>
            <GridControlProvider>
                <GridControlBar></GridControlBar>
                <OutputDisplay></OutputDisplay>
            </GridControlProvider>
        </div>
    );
}
