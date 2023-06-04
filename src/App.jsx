import GridControlBar from "./components/GridControlBar/GridControlBar";
import OutputDisplay from "./components/OutputDisplay/OutputDisplay";
import SideBar from "./components/SideBar/SideBar";

function App() {
    return (
        <div className="view-wrapper">
            <SideBar></SideBar>
            <GridControlBar></GridControlBar>
            <OutputDisplay></OutputDisplay>
        </div>
    );
}

export default App;
