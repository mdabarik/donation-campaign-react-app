import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/donation">Donation</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
        </div>
    );
};

export default NavBar;