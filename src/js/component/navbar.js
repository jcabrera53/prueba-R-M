import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-info mb-3">
			<Link to="/">
				<button className="btn ms-2 p-2 h1 btn-success">Star Wars App</button>
			</Link>
			<div className="ml-auto me-2">
				<div className="btn-group dropstart">
  					<button className="btn btn-primary dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos 💗
  					</button>
  					<ul className="dropdown-menu ">
    					{store.favoritos.map((item,index) => 
						<li className="d-flex justify-content-between ms-2" key={index}>
							{item}
							<button className="border-0 bg-white" onClick={() => actions.deleteFavorite(item)}>🗑</button>
							</li>)}
  					</ul>
				</div>

			</div>
		</nav>
	);
};
