import { Link } from 'react-scroll';

import "./styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">LOGO</div>
      <ul>
        <li>
          <Link to="home" smooth={true} offset={-70} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-70} duration={500}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-70} duration={500}>
            SERVICES
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-70} duration={500}>
            CONTACT US
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;