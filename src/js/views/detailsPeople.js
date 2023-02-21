import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPeople = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    const [infoPeople, setPeople] = useState("");

    const peopleUrl =  `https://www.swapi.tech/api/people/${params.id}`

    const fetchDetailsPeople = (url)=>{
		fetch(url)
		.then(response => response.json())
		.then(data => {
			setPeople(data.result)
		})
		.catch(error => console.log(error))
	};

    useEffect(()=>{
        fetchDetailsPeople(peopleUrl)
    },[])

	return (
		<div className="jumbotron">
			<h1 className="text-center">⭐Name: {infoPeople && infoPeople.properties.name}</h1>
			<h1>🤖Gender: {infoPeople && infoPeople.properties.gender}</h1>
			<h1>📏Height: {infoPeople && infoPeople.properties.height}</h1>
			<h1>⚖Mass: {infoPeople && infoPeople.properties.mass}</h1>
			<h1>👩🏽‍🦰Hair Color: {infoPeople && infoPeople.properties.hair_color}</h1>
			<h1>👨🏽‍🦰Skin Color: {infoPeople && infoPeople.properties.skin_color}</h1>
			<h1>👁Eye Color: {infoPeople && infoPeople.properties.eye_color}</h1>
			<h1>📅Birth Year: {infoPeople && infoPeople.properties.birth_year}</h1>
			<h1>✨Description: {infoPeople && infoPeople.description}</h1>
			<hr className="my-4" />
		</div>
	);
};


