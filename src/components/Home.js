 import React from 'react';
 import { useState } from 'react';
 import * as math from 'mathjs';
 import { evaluate } from 'mathjs';
 import Button from "./Button";
 import Input from "./Input";
 import './Home.css';


 const Home = () => {



     const [text,setText]=useState("")
     const [resenje,setResenje]=useState("")
    
     const addToText=(val)=>{
       setText((text)=>[...text,val+""])
     }
    
    
    
     const resetInput=()=>{
     setText("");
     setResenje("");
     }
    
  
    
    
     const CalculateResult=()=>{
    
     const input=text.join(""); 
     setResenje(math.evaluate(input));
    
     }
    
    
     const buttonColor="#f2a33c";









 return(

     <div className="Home">
     <div className="calc-wrapper">
        
         <Input text={text} />

         <Input resenje={resenje} /> 
        
         <div className="row">
         <Button symbol="7" handleClick={addToText}/>
         <Button symbol="8" handleClick={addToText}/>
         <Button symbol="9" handleClick={addToText}/>
         <Button symbol="/" color={buttonColor} handleClick={addToText}/>
         </div>

         <div className="row">
         <Button symbol="4" handleClick={addToText}/>
         <Button symbol="5" handleClick={addToText}/>
         <Button symbol="6" handleClick={addToText}/>
         <Button symbol="*" color={buttonColor} handleClick={addToText}/>
         </div>

         <div className="row">
         <Button symbol="1" handleClick={addToText}/>
         <Button symbol="2" handleClick={addToText}/>
         <Button symbol="3" handleClick={addToText}/>
         <Button symbol="+" color={buttonColor} handleClick={addToText}/>
         </div>

         <div className="row">
         <Button symbol="0" handleClick={addToText}/>
         <Button symbol="." handleClick={addToText}/>
         <Button symbol="=" handleClick={CalculateResult}/>
         <Button symbol="-" color={buttonColor} handleClick={addToText}/>
    
         </div>
         <Button symbol="Clear" color="red" handleClick={resetInput}/>
       

       </div>

 </div>



 )


 }

 export default Home
