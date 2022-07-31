
import User from './component/user';
import dumbbell from './media/dumbbell.svg';
import nutrition from './media/nutrition.svg';
import walking from './media/walking.svg';
import data from './data/data.json'



import './App.css';

function App() {
  return (
    <div className="App" >
      <div className='firstRow'>
        <div className='columnWise'>
          <img src={walking} className="image" alt="img" style={{width:"50px",height:"50px"}}/>
          <p>Steps</p>
        </div>
        <div className='columnWise'>
          <img src={dumbbell} className="image2" alt="img" style={{width:"50px",height:"50px"}}/>
          <p>Workout</p>
        </div>
        <div className='columnWise'>
          <img src={nutrition} className="image" alt="img" style={{width:"50px",height:"50px"}}/>
          <p>Nutrition</p>
        </div>
      </div>
      {
        data.users.map((user,index)=>{
          return <User key={user.userId} userid={index}/>
        })
      }
    </div>
  );
}

export default App;
