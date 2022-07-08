import React,{useState ,useEffect} from "react";
const UseStatee =()=>{
   const[number,SetNumber]=useState(0);
//    const[count,SetCount]=useState(5);
   useEffect(()=>{
    // function ravii(){
     
        console.log("rendering again and again")
    //    }
   },[]);
   
    return(<div>
      <h1>hello developers</h1>
      <h2>now the count in {number}</h2>
      {/* <h2>{ravii}</h2> */}
      <button onClick={()=>SetNumber(number+1)}>click here</button>
    </div>)
}
export default UseStatee;