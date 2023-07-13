import ButtonList from "../../global/ButtonList/ButtonList";
import "./side-bar.css";

// declare component
// component is called SideBar
// component has no props being passed to it
const SideBar = () => {
    // define state hook
    // state hooks current and default value is an array of button value pairs
    // those value pairs are read only and can only be changed when calling the setButtons method
    // const [buttons, setButtons] = useState([
    //     {
    //         id: 1,
    //         isActive: true,
    //         label: "Blocks",
    //     },
    //     {
    //         id: 2,
    //         isActive: false,
    //         label: "Templates",
    //     },
    // ]);

    return (
        <aside className="side-bar card">
            <ButtonList></ButtonList>
            <ul className="toolbox">
                <li className="toolbox__block toolbox__block--1x1"></li>
                <li className="toolbox__block toolbox__block--2x1"></li>
                <li className="toolbox__block toolbox__block--1x2"></li>
                <li className="toolbox__block toolbox__block--2x2"></li>
            </ul>
        </aside>
    );
};

export default SideBar;
