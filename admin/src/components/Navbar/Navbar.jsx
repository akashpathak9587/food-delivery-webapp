import { assets } from "../../assets/assets";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="image" className="logo" />
      <img className="profile" src={assets.profile_image} alt="image" />
    </div>
  );
};

export default Navbar;
