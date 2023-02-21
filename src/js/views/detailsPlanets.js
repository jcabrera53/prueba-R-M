import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPlanets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    const [infoPlanets, setPlanets] = useState("");

    const planetsUrl =  `https://www.swapi.tech/api/planets/${params.id}`

    const fetchDetailsPlanets = (url)=>{
		fetch(url)
		.then(response => response.json())
		.then(data => {
			setPlanets(data.result)
		})
		.catch(error => console.log(error))
	};

    useEffect(()=>{
        fetchDetailsPlanets(planetsUrl)
    },[])

	return (
		<div className="jumbotron">
			<h1 className="text-center">⭐Name: {infoPlanets && infoPlanets.properties.name}</h1>
			<h1>💧Surface Water: {infoPlanets && infoPlanets.properties.surface_water}</h1>
			<h1>🌴Terrain: {infoPlanets && infoPlanets.properties.terrain}</h1>
			<h1>🌡Climate: {infoPlanets && infoPlanets.properties.climate}</h1>
			<h1>👽Population: {infoPlanets && infoPlanets.properties.population}</h1>
			<h1>🌌Gravity: {infoPlanets && infoPlanets.properties.gravity}</h1>
			<h1>🪐Orbital Period: {infoPlanets && infoPlanets.properties.orbital_period}</h1>
			<h1>🌍Rotation Period: {infoPlanets && infoPlanets.properties.rotation_period}</h1>
            <h1>⭕Diameter: {infoPlanets && infoPlanets.properties.diameter}</h1>
			<h1>✨Description: {infoPlanets && infoPlanets.description}</h1>
			<hr className="my-4" />
		</div>
	);
};