import CodeToImgView from "./views/CodeToImg.jsx";
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
        element: <CodeToImgView />,
    },
    {
        // id param is used to pass in elem info from JSON file
        path: "/snippet-editor/:id",
        element: <SnippetEditorView />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
