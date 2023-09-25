import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {

    return (
        <div className="container w-[90%] md:w-[100%] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;

// w-[90%] md:w-[100vw]]