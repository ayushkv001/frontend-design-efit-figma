import React,{useState} from "react";
import { CircularProgressbarWithChildren,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

import data from '../data/data.json'
import '../style/steps.css'


const Steps = ({userID})=>{
    const walked = data.users[userID].stepsWalked;
    const target = data.users[userID].stepsTarget;
    const percent = (walked / target) * 100;
    
    const [change,setChange] = useState(target || 1000)

    const increment = ()=>{
        setChange((prev)=> prev+100)
    }

    const decrement =()=>{
        setChange((prev)=>{
            if(prev<=100) return 0;
            return prev-100;
        })
    }
    


    return <div className="steps">
        <div className="steps2" style={{paddingTop:"30px"}}>
        <CircularProgressbarWithChildren
        value ={percent}
        styles={buildStyles({
            rotation:0.25,
            pathColor:"aqua",
            
        })}>
            <p className="walked">{walked}</p>
            <p className="under">walked</p>

        </CircularProgressbarWithChildren></div>
        <div className="changer" style={{paddingTop:"18px"}}>
            <button onClick={increment} style={{marginBottom:"1px"}}>+</button>
            <div className="section">
                <p className="walked">{change / 1000}k</p>
                <p className="under">target</p>
            </div>
            <button onClick={decrement}>-</button>
        </div>
    </div>
}
export default Steps;