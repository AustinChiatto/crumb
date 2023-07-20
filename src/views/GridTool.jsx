import { GridControlProvider } from "../GridControlContext";
import GridControlBar from "../components/GridTool/GridControlBar/GridControlBar";
import OutputDisplay from "../components/GridTool/OutputDisplay/OutputDisplay";
import SideBar from "../components/GridTool/SideBar/SideBar";
import SiteHeader from "../components/global/SiteHeader/SiteHeader";

export default function GridTool() {
    return (
        <>
            <SiteHeader />
            <div className="view-wrapper">
                <SideBar></SideBar>
                <GridControlProvider>
                    <GridControlBar></GridControlBar>
                    <OutputDisplay></OutputDisplay>
                </GridControlProvider>
            </div>
        </>
    );
}
