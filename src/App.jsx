import { GridControlProvider } from "./GridControlContext";
import GridControlBar from "./components/GridControlBar/GridControlBar";
import OutputDisplay from "./components/OutputDisplay/OutputDisplay";
import SideBar from "./components/SideBar/SideBar";

function App() {
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

export default App;
