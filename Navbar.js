import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar">
          <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ width: 100 + "%" }}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src="https://darshan.ac.in/Content/media/DU_Logo.svg" alt="Logo" width="150" height="50" className="d-inline-block align-text-top" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/Faculty">Faculty</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/Student">Student</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/Student/add">Add Student</Link>
                  </li>
                  <li class="nav-item">
                    <Dropdown>
                      <Dropdown.Toggle className="nav-link active"   variant="" id="dropdown-basic">
                        use Effect
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/useEffect">useEffect</Dropdown.Item>
                        <Dropdown.Item href="/useEffect/Calculator">Calculator</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li class="nav-item">
                    <Dropdown>
                      <Dropdown.Toggle className="nav-link active" variant="" id="dropdown-basic">
                        use State
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/useState">useState</Dropdown.Item>
                        <Dropdown.Item href="/useEffect/Calculator">Calculator</Dropdown.Item>
                        <Dropdown.Item href="#">option 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/About">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/Contact">Contact</Link>
                  </li>
                </ul>
                
              </div>
            </div>
          </nav>

        </nav>
      </div>
    </>
  );
}


export default Navbar;