import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return (
        <div className="flex justify-between items-center my-8 relative z-30">
            <Logo></Logo>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;