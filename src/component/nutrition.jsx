import React,{useState} from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";


import data from '../data/data.json';
import { shower } from "../data/vision";
import { showPie } from "../data/value";
import arrow from '../media/arrow.svg';
import '../style/nutrition.css'



const Nutrition = ({userID})=>{

    const proteinTaken = data.users[userID].proteinConsumed;
    const fatTaken = data.users[userID].fatConsumed;
    const carbTaken = data.users[userID].carbConsumed;
    const calorieTaken = data.users[userID].calorieIntake;

    const sum = proteinTaken+fatTaken+carbTaken;

    const showIt = shower({userID});
    const pie = showPie({userID});

    const [change,setChange] = useState(sum || 1000)

    const increment = ()=>{
        setChange((prev)=> prev+100)
    }

    const decrement =()=>{
        setChange((prev)=>{
            if(prev<=100) return 0;
            return prev-100;
        })
    }

    return <div className="nutrition">
        <div>
            <PieChart 
            animate={true} 
            style={{width:"60px",height:"60px"}}
            animationEasing="ease-out" 
            totalValue={1} 
            data={pie}
            lineWidth={25}
            label={()=>calorieTaken}
            labelStyle={{fontSize:"18px",fontWeight:"bold",lineHeight:"15px",fill:"white"}}
            labelPosition={0}/>
            <p>calorie</p>
        </div>
        
<div className="changer">
            <button onClick={increment}>+</button>
            <div>
                <p className="walked">{change / 1000}k</p>
                <p className="under">target</p>
            </div>
            <button onClick={decrement}>-</button>
        </div>
        <Link to={`/${userID}/nutrition`}><img src={arrow}/></Link>
    </div>
}


export default Nutrition;

