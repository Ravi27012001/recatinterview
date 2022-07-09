import React,{useState,useMemo} from "react";

const Numbers = ()=>{
   const[inc,SetInc]= useState(0);
   const[dec,SetDec]=useState(100);
   const UseMemoMultiplication = useMemo(
    function Multiply (){
        console.log("function is rendered")
        return inc*10;
       },[inc]);
   

   return(<div>
    <h1>Increased number is {inc}</h1>
    <h1>Decreased number is {dec}</h1>
    <h2>multiplication no is {UseMemoMultiplication}</h2>
   <button onClick={()=>SetInc(inc+1)}>increase</button>
   <button onClick={()=>SetDec(dec-1)}>decrease</button>
   </div>)
};

export default Numbers;