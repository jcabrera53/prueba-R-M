import React from "react"

const Characters = ({characters})=>{
  return(
    <div className="row">
        {characters.map((item, index)=> (
        <div className="col" key={index}>
    <div className="card mb-3">
        <img src={item.image} alt=""/>
        <h3>{item.name}</h3>
        </div>
        </div>
        ) )};
    </div>
  );  
}

export default Characters;
