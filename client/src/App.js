import logo from "./assets/imgs/VaultLogoforsite.png";
import "./App.css";
import { Container, Flex, Image } from "@chakra-ui/react";

// import NavbarComp from "./componets/Navbar/Navbar";
// import Footer from "./componets/Footer/Footer";

function App() {
	return (
		<Container bg="#272932">
			<Flex>
				<header className="App-header">
					<Image src={logo}></Image>
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</Flex>
		</Container>
	);
}

export default App;
