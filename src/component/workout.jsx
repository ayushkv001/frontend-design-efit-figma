import React from "react";
import { Link } from "react-router-dom";

import calender from '../media/calender.svg';
import manWithTick from '../media/manWithTick.svg';
import data from '../data/data.json';
import {months} from '../data/months';
import alert from '../media/alert.svg';
import arrow from '../media/arrow.svg';
import '../style/workout.css'


const Workout = ({userID})=>{

    const userId = data.users[userID].userId;
    const firstDate = new Date(data.users[userID].performedDate)
    const secondDate = new Date(data.users[userID].scheduledDate)
    const feedback = data.users[userID].feedback;
    const today = new Date();

    const deadLine = today.getDate() === secondDate.getDate() && today.getMonth() === secondDate.getMonth() && today.getFullYear() === secondDate.getFullYear();

    return <div className="workout">
        <div className="calender">
            <div>
                <img src={manWithTick} />
                <p>{`${firstDate.getUTCDate()} ${months[firstDate.getUTCMonth()]}`}</p>
            </div>
            <div className={()=>{
                if(deadLine)
                return "deadLine"
                return "normal"
            }}>
                <img src={calender} />
                <p>{`${secondDate.getUTCDate()} ${months[secondDate.getUTCMonth()]}`}</p>
            </div>
        </div>
        <Link to={`/${userID}/workout`}><img src={deadLine?alert:arrow}/></Link>
    </div>
}

export default Workout;