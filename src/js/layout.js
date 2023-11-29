import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Navbar } from './component/Navbar.jsx'
import { Home } from "./component/Home.jsx";
import { Footer } from './component/Footer.jsx'
import { VehiculoInfo } from "./component/VehiculosInfo.jsx";
import { PlanetaInfo } from "./component/PlanetasInfo.jsx";
import { PersonajeInfo } from "./component/PersonajesInfo.jsx";
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="bg">
			<BrowserRouter basename={basename}>
			<Navbar></Navbar>
					<Routes>
					
						<Route path="/" element={<Home />} />
						<Route path="/vehiculo/:id" element={<VehiculoInfo />} />
						<Route path="/planets/:id" element={<PlanetaInfo />} />
						<Route path="/people/:id" element={<PersonajeInfo />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						
					</Routes>
					<Footer></Footer>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);