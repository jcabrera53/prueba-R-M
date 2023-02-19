import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<button className="btn ms-2 p-2 h1 btn-success">Star Wars App</button>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary h1 p-2 me-2">Favoritos 💗</button>
				</Link>
			</div>
		</nav>
	);
};
