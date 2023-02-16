import React from "react"

const Characters = ({characters})=>{
  return(
    <div className="row">
        {characters.map((item, index)=> (
        <div className="col" key={index}>
    <div className="card">
        <img src={item.image} alt=""/>
        </div>
        </div>
        ) )};
    </div>
  );  
}

export default Characters;
