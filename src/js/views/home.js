import React,{useEffect,useState}from "react";
import Grid from "../component/grid.js";
import Pagination from "./../component/pagination.js";
import "../../styles/home.css";

export const Home = () => {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	
	const [infoPeople, setInfoPeople] = useState("");
	const [infoPlanets, setInfoPlanets] = useState("");
	const [infoVehicles, setInfoVehicles] = useState("");
	

	const peopleUrl =  "https://www.swapi.tech/api/people"
	const planetsUrl =  "https://www.swapi.tech/api/planets"
	const vehiclesUrl =  "https://www.swapi.tech/api/vehicles"

	const fetchPeople = (url)=>{
		fetch(url)
		.then(response => response.json())
		.then(data => {
			setPeople(data.results)
			setInfoPeople(data)
		})
		.catch(error => console.log(error))
	};

	const fetchPlanets = (url2)=>{
		fetch(url2)
		.then(response2 => response2.json())
		.then(data2 => {
			setPlanets(data2.results)
			setInfoPlanets(data2)
		})
		.catch(error2 => console.log(error2))
	};

	const fetchVehicles = (url3)=>{
		fetch(url3)
		.then(response3 => response3.json())
		.then(data3 => {
			setVehicles(data3.results)
			setInfoVehicles(data3)
		})
		.catch(error3 => console.log(error3))
	};

	const peoplePrevious = ()=>{
		fetchPeople(infoPeople.previous);
	}

	const planetsPrevious = ()=>{
		fetchPlanets(infoPlanets.previous);
	}

	const vehiclesPrevious = ()=>{
		fetchVehicles(infoVehicles.previous);
	}
	
	const peopleNext = ()=>{
		fetchPeople(infoPeople.next);
	}

	const planetsNext = ()=>{
		fetchPlanets(infoPlanets.next);
	}

	const vehiclesNext = ()=>{
		fetchVehicles(infoVehicles.next);
	}

useEffect(()=>{
	fetchPeople(peopleUrl)
	fetchPlanets(planetsUrl)
	fetchVehicles(vehiclesUrl)
},[])

return (
	<div className="text-center mt-5">
		<h1>This is... My Star Wars App!</h1>
		<div className="container">
		<h1>People</h1>
		<Grid category={people} />
		<Pagination previous={infoPeople.previous} next={infoPeople.next} onPrevious={peoplePrevious} onNext={peopleNext}/>
        <h1>Planets</h1>
		<Grid category={planets} />
		<Pagination previous={infoPlanets.previous} next={infoPlanets.next} onPrevious={planetsPrevious} onNext={planetsNext}/>
		<h1>Vehicles</h1>
		<Grid category={vehicles} />
		<Pagination previous={infoVehicles.previous} next={infoVehicles.next} onPrevious={vehiclesPrevious} onNext={vehiclesNext}/>
    	</div>
	</div>
)
}