import React, { useEffect, useState } from 'react'
import "./cardContainer.css"
import Card from '../Card/card'
function CardContainer({cards}:{cards:Array<any>}) {
  const [firstPickIndex,setFirstPickIndex] = useState(-1)
  const [secondPickIndex,setSecondPickIndex] = useState(-1)
  
  useEffect(()=>{
    let t :any | number = null
    if(secondPickIndex !== - 1){
      if(cards[firstPickIndex].id !== cards[secondPickIndex].id){
        t = setTimeout(()=>{
          cards[firstPickIndex].isTurnOver = false
          cards[secondPickIndex].isTurnOver = false
          setFirstPickIndex(-1)
          setSecondPickIndex(-1)
        },500)
      }
      else{
        setFirstPickIndex(-1)
        setSecondPickIndex(-1)
      }
      return () => {
        if(t) {
          clearTimeout(t);
        }
        cards[firstPickIndex].isTurnOver = false
        cards[secondPickIndex].isTurnOver = false
        setFirstPickIndex(-1)
        setSecondPickIndex(-1)
      };
    }
  },[secondPickIndex])
  const handleClick = (index:number) => {
    cards[index].isTurnOver = true
    if(firstPickIndex === -1 ){
      setFirstPickIndex(index)
    }
    else{
      setSecondPickIndex(index)
    }
  }
  return (
    <div className='container'>
       {cards
        .map((v,i)=>{
          return (<Card {...v} key={i} handleClick={handleClick} index={i}/>)})
       }
        
    </div>
  )
}

export default CardContainer