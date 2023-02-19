import React from "react"

const Pagination = ({previous,next,onPrevious,onNext})=>{
    
    const Previous = ()=>{
        onPrevious();
    }

    const Next = ()=>{
        onNext();
    }

  return(
    <nav>
    <ul className="pagination justify-content-center">
        {
            previous ? 
            <li className="page-item">
            <button className="page-link" onClick={Previous}>Anterior</button>
        </li>
            :
            null
        }
        {
            next ?
        <li className="page-item">
            <button className="page-link" onClick={Next}>Siguiente</button>
        </li>
        :
        null
        }
    </ul>
    </nav>
  );  
}

export default Pagination;
