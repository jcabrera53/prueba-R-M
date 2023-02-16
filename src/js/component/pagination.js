import React from "react"

const Pagination = ({prev,next,onPrevious,onNext})=>{
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
            prev ? 
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
