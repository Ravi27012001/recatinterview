import React from "react"
 
class Navbar extends React.Component{
    componentWillUnmount(){
        console.log("now the component will unmount");
    }
    render(){
        return(<div><h1>This is navabar.</h1></div>)
    }
}
export default Navbar;