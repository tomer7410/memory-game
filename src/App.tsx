import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import CardContainer from './components/CardContainer/cardContainer';
import { cardList } from '../src/components/Card/iconValues'
function shuffle(array:Array<any>) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
function App() {
  const [cards,setCards] = useState(shuffle([...cardList]))
  const [counter,setCounter] = useState(0)
  const t = useRef(null)
  useEffect(()=>{
    let t : any | number = null
    if(counter === 2){

       t = setTimeout(()=>{
        setCards([...shuffle(cards)])
        setCounter(0)
       },100) 
      
    }
    return(()=>{
      if(t) clearTimeout(t)
    })
  },[counter])
  useEffect(()=>{
    setCounter(counter + 1)
  },[cards])
  return (
    <div className="App">
      <div className='main-container'>
      <CardContainer cards={cards}/>
      <button type="button" onClick={()=>{
        cards.forEach(c => c.isTurnOver = false)
        setCards([...cards])
        }}>SHUFFLE</button>
      </div>
     
    </div>
  );
}

export default App;
