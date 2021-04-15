
import React from 'react'
import {Slider} from "./Slider/Slider";
import './Slider/slider.css'


export function App () {
    return(
        <div>
            <button onClick={alert('hello')}>QWE</button>
           <Slider />
        </div>
    )
}
export default App