import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
const App = () => {
	return (
		<React.Fragment>
			<Header />
			<main className="py-4">
				<Container>
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default App;
