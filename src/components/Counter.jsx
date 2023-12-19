import React,{useState}from 'react';
import attack from'../images/attack.png';
import defend from'../images/defend.png';

export const Counter=()=>{
  
 const[co,setCount]=useState(0);
 const[st,setSt]=useState('')

 const ver=()=>{
  const rr= (+co<-10)?'fould':(+co>10)?'win':''
  return rr
 
 }

  const handleAttack=(plus)=>{
    
   setCount(co+plus);
   setSt('Attack');
   
  }

 const handleDefence=(minus)=>{
  setCount(co-minus);
  setSt('Defence');
 
 }
 const handleReset=()=>{
  setCount(0);
  setSt('');
 }

 const handleRandomPlay=()=>{
  let playMode=Math.round(Math.random())
  if(playMode==0)handleAttack(Math.round(Math.random()*10))
  else handleDefence(Math.round(Math.random()*10))
 }

  return(
    <div className='count'>
      <span className="count_tit">Game Score :{co}</span>
      <p className="count_dis">You win +10 points and lose at -10 points!</p>
      <span className="count_last">Last Play:{st}</span>
      <span className="count_status">Game Status:{ver()}</span>
     <div className="count_row">
        <img src={attack} alt=""  onClick={()=>{handleAttack(Math.round(Math.random()*10))} } className='count_row_img' style={{border:'1px solid green',padding:'5px',borderRadius:'3px'}}/>
        <img src={defend} alt=""  onClick={()=>{handleDefence(Math.round(Math.random()*10))}} className='count_row_img' style={{border:'1px solid red',padding:'5px',borderRadius:'3px'}}/>
        
     </div>
    <button className="btn btn-secondary" onClick={handleRandomPlay}>Random Play</button>
    <button className="btn btn-warning" onClick={handleReset}>Reset</button>
   
      
    </div>
  )
}
