import { Link } from "react-router-dom";

const navLink = {
  textDecoration: "None",
};

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" style={navLink}>
          <span className="navbar-brand">nusscores.com</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" style={navLink}>
                <span className="nav-link">Home</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" style={navLink}>
                <span className="nav-link">About</span>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tournament
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/login" style={navLink}>
                  <span className="dropdown-item">Create a bracket</span>
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/alltourney" style={navLink}>
                  <span className="dropdown-item">See all tournaments</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
