import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<React.Fragment>
			<footer>
				<Container>
					<Row>
						<Col className="text-center py-3 bg-light text-capitalize">
							<p className="mb-0">
								copyright &copy; Masudur rahman
							</p>
						</Col>
					</Row>
				</Container>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
