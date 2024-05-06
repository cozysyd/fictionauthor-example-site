import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>AuthorWebsite</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="active">
              <CustomLink to="/Home">Home</CustomLink>
            </Nav.Link>
            <Nav.Link className="active">
              <CustomLink to="/About">About</CustomLink>
            </Nav.Link>
            <NavDropdown title="Books" id="navbarScrollingDropdown">
              <NavDropdown.Item className="active">
                <CustomLink to="/SeriesOne">Series #1</CustomLink>
              </NavDropdown.Item>
              <NavDropdown.Item className="active">
                <CustomLink to="/SeriesTwo">Series #2</CustomLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="active">
                <CustomLink to="/UpcomingSeries">Upcoming Series</CustomLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="active">
              <CustomLink to="/ReleaseDate">Latest News</CustomLink>
            </Nav.Link>
          </Nav>
          <Form className="d-flex" id="searchBar">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
