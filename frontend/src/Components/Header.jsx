import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
	return (
		<React.Fragment>
			<header>
				<Navbar bg="light" expand="lg" collapseOnSelect>
					<Container>
						<Navbar.Brand href="/">Masud's Shop</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-auto">
								<Nav.Link href="/cart">
									{" "}
									<span className="mr-1">
										<i className="fas fa-cart-plus"></i>
									</span>{" "}
									Cart
								</Nav.Link>
								<Nav.Link href="/login">
									<span className="mr-1">
										<i className="fas fa-sign-in-alt"></i>
									</span>{" "}
									SignIn
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
		</React.Fragment>
	);
};

export default Header;
