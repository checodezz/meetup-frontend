import * as Icon from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg m-0 p-0">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" href="#">
          <img
            src="https://help.meetup.com/hc/theming_assets/01HZH3ZAT7AR9TR620NM18CDKN"
            alt="Meetup Logo"
            className="img-fluid"
            style={{ width: "100px" }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="search-bar-container ms-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search events"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Bengaluru, IN"
                aria-label="Location"
              />
              <div className="input-group-append">
                <button
                  className="btn"
                  type="button"
                  style={{ backgroundColor: "#f65858" }}
                >
                  <Icon.Search size={13} style={{ color: "white" }} />
                </button>
              </div>
            </div>
          </div>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <a
                className="nav-link active d-flex align-items-center"
                aria-current="page"
                href="#"
              >
                <Icon.Globe className="me-1" /> English
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn text-light"
                style={{ background: "#00798a" }}
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
