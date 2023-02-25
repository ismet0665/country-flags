import "./Navbar.scss";
import logo from "../../helpers/favicon.png"; //fotografları bu şekilde import ediyoruz import isimveriyoruz from "dosyayolu"
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <a href="#About">About</a>
        <a href="#Country">Country</a>
        <a href="#City">City</a>
        <a href="#Contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
