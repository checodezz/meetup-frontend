import * as Icon from "react-bootstrap-icons";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          <img
            src="https://help.meetup.com/hc/theming_assets/01HZH3ZAT7AR9TR620NM18CDKN"
            alt=""
            className="img-fluid container"
            style={{ width: "100px" }}
          />
        </a>
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

        {/* <div className="input-group" style={{ width: "400px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
          />
          <span className="input-group-text">@</span>
        </div> */}

        <div className="search-bar-container">
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
              <button className="btn btn-danger" type="button">
                <Icon.Search style={{ color: "white" }} />
              </button>
            </div>
          </div>
        </div>

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page" href="#">
              <Icon.Globe /> English
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-info text-light"
              style={{ background: "#00798a" }}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
