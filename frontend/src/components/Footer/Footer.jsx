import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="image" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            hic repellat sapiente, adipisci, quod voluptatem architecto harum
            voluptatum nisi vitae ducimus dolores? Pariatur, nemo? Excepturi
            accusantium ea modi eos in!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="image" />
            <img src={assets.twitter_icon} alt="image" />
            <img src={assets.linkedin_icon} alt="image" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9956515444</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyrights">
        copyright 2024 © tomato.com ~ All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
