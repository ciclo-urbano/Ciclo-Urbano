import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        Project by{" "}
        <a href="https://www.github.com/dollydoxyfree" target="_blank">
          Jessica Embury
        </a>
        ,{" "}
        <a href="https://www.github.com/nathanwould" target="_blank">
          Nathan Wood
        </a>
        ,{" "}
        <a href="https://www.github.com/patraydev" target="_blank">
          Pat Ray
        </a>
        , &{" "}
        <a href="https://www.github.com/dmelvy" target="_blank">
          Daphne Melvin
        </a>
      </p>
    </div>
  );
}

export default Footer;
