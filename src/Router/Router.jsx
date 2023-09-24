import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Statistics from "../components/Statistics/Statistics";
import Donation from "../components/Donation/Donation";
import CardDetails from "../components/CardDetails/CardDetails";

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('campaigns.json'),
                element: <Home></Home>
            },
            {
                path: '/:id',
                element: <CardDetails></CardDetails>,
                loader: () => fetch('campaigns.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default myCreatedRouter;