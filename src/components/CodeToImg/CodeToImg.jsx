// context
import { CodeToImgProvider } from "../../CodeToImgContext";

// styles
import Output from "./Output/Output";
import Sidebar from "./Sidebar/Sidebar";

export default function CodeToImg() {
    return (
        <>
            <CodeToImgProvider>
                <Sidebar />
                <Output />
            </CodeToImgProvider>
        </>
    );
}
