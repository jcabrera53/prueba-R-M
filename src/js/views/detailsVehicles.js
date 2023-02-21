import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsVehicles = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    const [infoVehicles, setVehicles] = useState("");

    const vehiclesUrl =  `https://www.swapi.tech/api/vehicles/${params.id}`

    const fetchDetailsVehicles = (url)=>{
		fetch(url)
		.then(response => response.json())
		.then(data => {
			setVehicles(data.result)
		})
		.catch(error => console.log(error))
	};

    useEffect(()=>{
        fetchDetailsVehicles(vehiclesUrl)
    },[])

	return (
		<div className="jumbotron">
			<h1>⭐Name: {infoVehicles && infoVehicles.properties.name}</h1>
			<h1>⭐Model: {infoVehicles && infoVehicles.properties.model}</h1>
			<h1>⭐Vehicle Class: {infoVehicles && infoVehicles.properties.vehicle_class}</h1>
			<h1>⭐Manufacturer: {infoVehicles && infoVehicles.properties.manufacturer}</h1>
			<h1>⭐Cost in Credits: {infoVehicles && infoVehicles.properties.cost_in_credits}</h1>
			<h1>⭐Length: {infoVehicles && infoVehicles.properties.length}</h1>
			<h1>⭐Crew: {infoVehicles && infoVehicles.properties.crew}</h1>
			<h1>⭐Passengers: {infoVehicles && infoVehicles.properties.passengers}</h1>
            <h1>⭐Max Atmosphering Speed: {infoVehicles && infoVehicles.properties.max_atmosphering_speed}</h1>
            <h1>⭐Cargo Capacity: {infoVehicles && infoVehicles.properties.cargo_capacity}</h1>
            <h1>⭐Consumables: {infoVehicles && infoVehicles.properties.consumables}</h1>
			<h1>⭐Description: {infoVehicles && infoVehicles.description}</h1>
			<hr className="my-4" />
		</div>
	);
};