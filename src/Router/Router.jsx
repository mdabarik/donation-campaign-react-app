import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('campaigns.json')
    }
])

export default myCreatedRouter;