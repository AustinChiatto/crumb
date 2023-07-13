import CodeToImg from "./views/CodeToImg.jsx";
import Dashboard from "./views/Dashboard.jsx";
import GridTool from "./views/GridTool.jsx";
import SnippetEditor from "./views/SnippetEditor.jsx";
import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/home",
        element: <Dashboard />,
    },
    {
        path: "/grid-tool",
        element: <GridTool />,
    },
    {
        path: "/code-to-img",
        element: <CodeToImg />,
    },
    {
        path: "/snippet-editor",
        element: <SnippetEditor />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
