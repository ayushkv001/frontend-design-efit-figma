import data from '../data/data.json';

const shower = ({userID})=>{
    const proteinTaken = data.users[userID].proteinConsumed;
    const proteinTarget = data.users[userID].proteinTarget;
    const fatTaken = data.users[userID].fatConsumed;
    const fatTarget = data.users[userID].fatTarget;
    const carbTaken = data.users[userID].carbConsumed;
    const carbTarget = data.users[userID].carbTarget;

    return [
        {
            name: "PROTEIN",
            target: proteinTarget,
            consumed: proteinTaken,
            color: "magenta",
        },
        {
            name: "FATS",
            target: fatTarget,
            consumed: fatTaken,
            color: "blue",
        },
        {
            name: "CARBS",
            target: carbTarget,
            consumed: carbTaken,
            color: "yellow",
        },
    ]
}


export {shower};