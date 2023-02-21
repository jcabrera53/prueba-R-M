import React,{useContext} from "react"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const GridVehicles = ({category})=>{
  const { actions } = useContext(Context);

  return(
    <div className="row">
        {category.map((item, index)=> (
        <div className="col-3" key={index}>
    <div className="card mb-3 bg-info w-100">
        <h3>⭐{item.name}⭐</h3>
        <h5>🏷ID: {item.uid}</h5>
        <Link to={`/detailsVehicles/${item.uid}`}>
        <button className="btn btn-primary m-1">Detalles ➕</button>
        </Link>
				<button className="btn btn-success m-1" onClick={()=>actions.addFavorites(item.name)}>Agregar 🧡</button>
        </div>
        </div>
        ) )}
    </div>
  );  
}

export default GridVehicles;
