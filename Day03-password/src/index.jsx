import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"



function PasswordGenerator(){
    const [password , setPassword] = useState(" ");
    const [length,setLength] = useState(0);
   const [number , setNumber] = useState(false);
   const [char,setChar] = useState(false);

      //for optimiztion we are using usecallback function
        const GetPassword = useCallback(()=>{
                let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(number) str+=1234567890  //JavaScript us number ko string me convert karke append kar deta hai. so "1234567890" bhe thik h aur yeh bhe 
        if(char) str+="~!@#$%^&*()_+*/}{|/?><;:'"

         let pass ="";
         for(let i=0;i<length;i++){
            pass += str[Math.floor(Math.random()*str.length)];
         }

         setPassword(pass);
         },[length,number,char])  //this function only create new in memory when length,number,char will change otherwise old will be used


    useEffect(()=>{
        GetPassword();
    },[length,number,char])
     


    return(
        <div id="outer-box">
            <h1>Password - {password}</h1>
            <div id="inner-box">
                <input type="range" min={5} max={50} id="rangeLength" value={length} onChange={(e)=>{setLength(e.target.value)}}/>
                <label htmlFor="rangeLength">length({length}) </label>

                <input type="checkbox" id="numbers"  defaultChecked={number}  onChange={()=>{setNumber(!number)}}/>
                <label htmlFor="numbers">  Add Numbers </label>

                <input type="checkbox"  id="characters" defaultChecked={char} onChange={()=>{setChar(!char)}}/>
                <label htmlFor="characters"> Add Special Characters</label>
                
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<PasswordGenerator/>)