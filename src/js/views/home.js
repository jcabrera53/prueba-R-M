import React,{useEffect,useState}from "react";
import Characters from "./../component/characters.js";
import "../../styles/home.css";

export const Home = () => {
	const [characters, setCharacters] = useState([]);

	const initialUrl =  "https://rickandmortyapi.com/api/character";

	const fetchCharacters = (url)=>{
		fetch(url)
		.then(response => response.json())
		.then(data => setCharacters(data.results))
		.catch(error => console.log(error))
	};

useEffect(()=>{
	fetchCharacters(initialUrl);
},[])

return (
	<div className="text-center mt-5">
		<h1>This is... My Rick and Morty App!</h1>

		<div className="container">
        <Characters characters={characters} />
    </div>
		
	</div>
);
};