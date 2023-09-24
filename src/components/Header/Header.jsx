import Banner from "../Banner/Banner";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return (
        <div className="flex justify-between items-center border border-blue-300 my-8">
            <Logo></Logo>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;