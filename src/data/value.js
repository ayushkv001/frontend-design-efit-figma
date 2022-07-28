import data from '../data/data.json';

const showPie = ({userID})=>{
    const proteinTaken = data.users[userID].proteinConsumed;
    const fatTaken = data.users[userID].fatConsumed;
    const carbTaken = data.users[userID].carbConsumed;


    const sum = proteinTaken+fatTaken+carbTaken;

    return [
        {
            name: "PROTEIN",
            value:  proteinTaken / sum,
            color: "magenta"
        },
        {
            name: "FATS",
            value: fatTaken / sum,
            color: "blue",
        },
        {
            name: "CARBS",
            value: carbTaken / sum,
            color: "yellow",
        },
    ]
}


export {showPie};