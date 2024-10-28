import React, { useState } from "react"



const TrafficLight = () => {
    const [color,setColor]= useState("")

    return (
        <> 
            <div className="bg-dark palillo align-self-center">
                <h1></h1>
            </div>
            <div className="bg-dark cajetin rounded p-2 d-flex  flex-column align-self-center">
                <div onClick={()=>setColor("red")} className={`bg-danger circulo pt-2 ${color=="red" ? "on_red": " "  }`}></div>
                <div onClick={()=>setColor("yellow")} className={`bg-warning circulo pt-2 ${color=="yellow" ? "on_yellow": " "  }`}></div>
                <div  onClick={()=>setColor("green")} className={`bg-success circulo pt-2 ${color=="green" ? "on_green": " "  }`}></div>
            </div>
        </>
    )
}

export default TrafficLight;