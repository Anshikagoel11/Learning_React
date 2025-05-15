import React from "react";
import ReactDOM from "react-dom/client";

const name ="Anshika";
const styleobj ={
    // background:"orange",
    color:"yellow",
    fontSize:"40px"
}


const callme = () => {
  const x = [1, 2, 3, 4];
  return (
    <ul style={{ color: "white" }}>
      {x.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};



document.body.style.background ="black"
const element1 = (<h1 id="intro" style={styleobj}>Hello!  I am {name}</h1>);
const element2 = (<h2 style={{color:"white"}}>Full stack developer</h2>);


const  box1 = (<div style={{height:"100px",width:"100px",background:"violet",color:"black",padding:"15px",alignContent:"center"}}>HEY! {name} i am box1  {<div style={{background:"yellow"}}>small me</div>}</div>)


const root = ReactDOM.createRoot(document.getElementById('root'))
const elem = (<>{element1}{element2}{box1} {callme()}</>);
root.render(elem)