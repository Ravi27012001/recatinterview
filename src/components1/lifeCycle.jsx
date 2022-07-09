import React from "react";
import Navbar from "./Navbar";
class LifeCycle extends React.Component{
    constructor(){
        super()
        this.state={
            show:true,
        counter:0
        }
        console.log("constructor");
    }
    componentDidMount(){
        console.log("component did mount");
    }
    componentDidUpdate(pP,pS,sS){
        console.log("component is updated", pS)
       
    }
     
    render(){
        console.log("render");
        return(<div>
            <h1>hello developers</h1>
           { this.state.show ?
           <Navbar />:null
           }
          
           <button onClick={()=>{this.setState({show:!this.state.show})}}>toggle button</button>
           <h2>{this.state.counter}</h2>
           <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>Update counter</button>
        </div>)
    }
}

export default LifeCycle;