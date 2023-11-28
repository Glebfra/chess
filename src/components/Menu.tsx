import { ReactElement } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "src/styles/Menu.css";

function Menu(): ReactElement {
	return (
		<Navbar expand="lg">
			<Container>
				<Navbar.Brand href="#">Chess</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse>
					<Nav className="me-auto">
						<Nav.Link href="#friends">Friends</Nav.Link>
						<Nav.Link href="#4x4">4x4</Nav.Link>
						<Nav.Link href="1x1">1x1</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Menu;
