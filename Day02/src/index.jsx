import React ,{useState} from "react";
import ReactDOM from "react-dom/client"



function App(){
const [bgColor , setbgColor] =  useState("white");
  console.log("button clicked - " , bgColor) 

    return(
        <div id="box" style={{background:bgColor}}>     
            <button className="btn" onClick={()=>setbgColor("red")}>RED</button>
            <button className="btn" onClick={()=>setbgColor("yellow")}>YELLOW</button>
            <button className="btn" onClick={()=>setbgColor("blue")}>BLUE</button>
            <button className="btn" onClick={()=>setbgColor("green")}>GREEN</button>
            <button className="btn" onClick={()=>setbgColor("orange")}>ORANGE</button>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)