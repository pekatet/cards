import './index.css'
import React from 'react'

function Card (props) {
   return(
     <div className="card" style={{width: '18rem'}}>
       <img src={props.img} alt="card"/>
       <div className="card-body">
         {props.children}
       </div>
     </div>
   )
}

export default Card;