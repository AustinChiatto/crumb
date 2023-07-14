import CodeToImg from "./views/CodeToImg.jsx";
import GridTool from "./views/GridTool.jsx";
import SnippetEditorView from "./views/SnippetEditor.jsx";
import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardView from "./views/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardView />,
    },
    {
        path: "/home",
        element: <DashboardView />,
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
        element: <SnippetEditorView />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
