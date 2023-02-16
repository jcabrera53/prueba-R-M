import React,{useEffect,useState}from "react";
import Characters from "./../component/characters.js";
import Pagination from "./../component/pagination.js";
import "../../styles/home.css";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [info, setInfo] = useState({});

	const initialUrl =  "https://rickandmortyapi.com/api/character";

	const fetchCharacters = (url)=>{
		fetch(url)
		.then(response => response.json())
		.then(data => {
			setCharacters(data.results)
			setInfo(data.info)
		})
		.catch(error => console.log(error))
	};

	const onPrevious = ()=>{
		fetchCharacters(info.prev);

	}

	const onNext = ()=>{
		fetchCharacters(info.next);
	}


useEffect(()=>{
	fetchCharacters(initialUrl);
},[])

return (
	<div className="text-center mt-5">
		<h1>This is... My Rick and Morty App!</h1>

		<div className="container">
			<Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters} />
		<Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    </div>
		
	</div>
);
};