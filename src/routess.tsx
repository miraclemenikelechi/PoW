import { Navigate, RouteObject } from "react-router";

import { BaseLayout } from "./components/layout/base";
import Home from "./routes/home";
import { Skills } from "./routes/skills";

export const routes: Array<RouteObject> = [
    {
        path: "/miraclemenikelechi",
        Component: BaseLayout,
        children: [
            { index: true, Component: Home },
            { path: "/miraclemenikelechi/skills", Component: Skills },
        ],
    },

    { path: "/", element: <Navigate to="/miraclemenikelechi" replace /> },
    { path: "*", element: <Navigate to="/miraclemenikelechi" replace /> },
];
