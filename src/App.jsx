// import ButtonPrimary from "./components/ButtonPrimary/ButtonPrimary";

import ButtonList from "./components/ButtonList/ButtonList";

function App() {
    return (
        <>
            <div className="view-wrapper">
                <aside className="side-bar card">
                    <ButtonList></ButtonList>
                </aside>
                <section className="output-container card"></section>
            </div>
        </>
    );
}

export default App;
