import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none 1h-1"
          >
            Viña, Federico Adrián
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            &copy; 2023 La Banda del Sublime (Text), Inc
          </span>
        </div>
        <ul className="nav col-md4 justify-content-end list-undefined d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <FaFacebook />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <FaInstagram />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
