import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center my-8 relative z-30 gap-y-4 md:gap-y-0">
            <Logo></Logo>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;