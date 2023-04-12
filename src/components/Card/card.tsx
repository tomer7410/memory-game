import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import { iconValue} from './iconValues';
import './card.css'
import ReactCardFlip from 'react-card-flip';

interface CardProps {
  index:number,comp: JSX.Element; color: string,handleClick :(id:number) => void,isTurnOver:boolean
}
function Card({ comp,color,handleClick,isTurnOver,index} :CardProps) {
    
  return (
    
    <ReactCardFlip isFlipped={isTurnOver} flipDirection="vertical" containerStyle={{border:'1px red solid'}}>
       <div className='inital-card-state' onClick={()=>handleClick(index)}></div>
       <IconContext.Provider value={{...iconValue,color:color}}>
           {comp}
        </IconContext.Provider>
      </ReactCardFlip>
   
  ) 
}

export default Card