import React from "react";


import Steps from "./steps";
import Workout from "./workout";
import Nutrition from "./nutrition";


import profile from '../media/profile.png'
import data from '../data/data.json'
import '../style/user.css'
import bell from '../media/bell.svg'




const User =({userid}) =>{
    return <div className="User">
        <div className="image">
        <img src={profile} alt="profile"/></div>
        <div className="user-email">
            <p className="userName">{data.users[userid].username}</p>
            <p className="emailName">{data.users[userid].email}</p>
        </div>
        <Steps userID={userid}/>
        <Workout userID={userid}/>
        <Nutrition userID={userid}/>
        <img src={bell} className="bell"/>

    </div>
}


export default User;