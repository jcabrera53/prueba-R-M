import React from "react"

    export const Characters = ({characters})=>{
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

