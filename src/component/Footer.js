import "./Footer.css";
import logof from "../assest/logo/footerIcon.png";
import facebook from "../assest/logo/facebook-svgrepo-com.svg";
import twitter from "../assest/logo/twitter-154-svgrepo-com.svg";
import instagram from "../assest/logo/instagram-svgrepo-com.svg";
import github from "../assest/logo/github-142-svgrepo-com.svg";
import basketBall from "../assest/logo/basketball-svgrepo-com.svg";

function Footer() {
  return (
    <footer>
      <img src={logof} alt="logo" id="footer-logo" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
        consequuntur amet culpa cum itaque neque.
      </p>
      <ul id="footer-items">
        <li>About</li>
        <li>Careers</li>
        <li>History</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Blogs</li>
      </ul>
      <div id="footer-icons">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={github} alt="" />
        <img src={basketBall} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
