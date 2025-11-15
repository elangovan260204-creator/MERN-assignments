import React from 'react'
import Data from './assets/newData.json'

const Card = () => {
    return (
        <div className='background'>
            <div className=' d-flex flex-wrap justify-content-around'>
                

                {Data.map((D, i) => {
                    return ( 
     
     <div className='card m-3' key={i} style={{width:'13rem'}}>
        <img className='card-img-top'src={D.picture} alt="image" />
    
    <div className='card body'>
    <h1 className='card-title '>{D.name.title} {D.name.first}</h1>
    <p className='card-text mb-0 '>{D.cell}</p>
    <p className='card-text mb-0'>{D.location.city},{D.location.state}</p>
    <p className='card-text'>{D.location.country}</p>
    <a href="#"className=" card-text">{D.email}</a>
    </div>
      
    </div>);
                })}
                
            </div>
        </div>


    )
}

export default Card 
