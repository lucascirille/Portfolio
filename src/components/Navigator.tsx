import Bulb from './icons/Bulb'
import { useState } from 'react'

const Navigator=()=>{
    const [state,setState]=useState(false);
    if(state==true){
        console.log("hola")
    }

    return(
        <nav className="flex fixed justify-between w-full px-14 pt-10 h-20 bg-transparent z-10 text-white">
            
            <div><h1>copyright:@lucas_cirille</h1></div>
            <div>
                <ul className="inline-grid grid-cols-4 gap-4">
                    <li>asdadasss</li>
                    <li>sdsdsdsad</li>
                    <li>sdsdssds</li>
                    <li><button onClick={()=>setState(!state)}><Bulb/></button></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navigator