import { useState } from 'react';
import { supabase } from './supabaseClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function Header() {
  const [myActivity, setMyActivity] = useState([]);
  async function getActivity() {
    let { data: Health, error } = await supabase
      .from("Health")
      .select("*");
    setMyActivity(Health);
  }
  getActivity();
  return (
    myActivity.map(a => (
      <h1>{a.name + 's Wellness Dashboard'}</h1>
    ))
  );
}

function Activity() {
  const [myActivity, setMyActivity] = useState([]);
  async function getActivity() {
    let { data: Health, error } = await supabase
      .from("Health")
      .select("*");
    setMyActivity(Health);
  }
  getActivity();
  return (
    myActivity.map(a => (
      <tr>
        <tr>
          <img height='100' src='https://static.vecteezy.com/system/resources/thumbnails/006/417/305/small_2x/burn-calories-icons-set-free-vector.jpg' alt='burnt calories image'/>
            {a.caloriesBurnt + ' Calories burnt'}</tr>
          <tr>
            <img height='100' src='https://static.vecteezy.com/system/resources/previews/008/957/220/original/black-clock-and-time-management-business-icon-clipart-illustration-graphic-design-vector.jpg' alt='clock image'/>
            {a.activeTime + ' Active minutes'} </tr>
          <tr>
            <img height='100' src='https://i.etsystatic.com/19543171/r/il/b452ee/4712146693/il_fullxfull.4712146693_svjq.jpg' alt='footsteps'/>
            {a.miles + ' Miles Walked'}</tr>
          <tr>
            <img height='100' src='https://media.istockphoto.com/id/1218616386/vector/stair-way-ladder-icon.jpg?s=612x612&w=0&k=20&c=njw6OegQqvcVOkdSMUNj_d1IFKasvOhNe-Z9wAZa-yA=' alt='stairs'/>
            {a.steps + ' Steps Taken'}</tr>
          <tr>
            <img height='100' width='125' src='https://t4.ftcdn.net/jpg/01/44/48/59/360_F_144485947_omMceItN4n4xpMFbloGASmOxOH2zLrXz.jpg' alt='dumbell'/>
            {a.pounds + ' lbs lifted'}</tr>
        </tr>  
    ))
  );

};

function Health() {
  const [myActivity, setMyActivity] = useState([]);
  async function getActivity() {
    let { data: Health, error } = await supabase
      .from("Health")
      .select("*");
    setMyActivity(Health);
  }
  getActivity();
  return (
    myActivity.map (a => (
      <ul>
       <li>{'Age: ' + a.age + ' years old'}</li>
        <li>{'Weight: ' + a.weight + ' lbs'}</li>
        <li>{'Height: ' + a.height + ' ft'}</li>
        <li>{'Resting Heart Rate: ' + a.restHR + ' bpm'}</li>
        <li>{'Max Heart Rate: ' + a.maxHR + ' bpm'}</li>
        <li>{'Blood Pressure: ' + a.bloodPressure + 'mm Hg'}</li>
      </ul>  
    ))
  );
}

function Nutrition() {
  const [myActivity, setMyActivity] = useState([]);
  async function getActivity() {
    let { data: Health, error } = await supabase
      .from("Health")
      .select("*");
    setMyActivity(Health);
  }
  getActivity();
  return (
    myActivity.map (a => (
      <ul>
        <li>{'Calorie Intake: ' + a.calories + ' cals'}</li>
          <li>{'Protein goal: ' + a.protein + ' g'}</li>
          <li>{'Fats: ' + a.fat + ' g'}</li>
          <li>{'Carbs: ' + a.carbs + ' g'}</li>
          <li>{'Sugar: <' + a.sugar + ' g'}</li>
      </ul>
      /** was going to put each within a card but found it easier to style without bootstrap but its in here and connected.
       * <div class="card">
        <div class="card-body">
          <h5 class="card-title">Daily Nutrition</h5>
          <p class="card-text">
          </p>
        </div>
      </div>*/   
    ))
  );
}


function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <header className="body">
        <div className='health cardCs'>
          <h3>Health</h3> 
          <Health />
        </div>
        <div className='activity cardCs'>
          <h3>Activity</h3>
          <Activity />
        </div>
        <div className='nutrition cardCs'>
          <h3>Nutrition</h3>
          <Nutrition /> 
        </div>     
        <div className='email cardCs'>
          <a id="emailMe" href="arcinie3@msu.edu">Set new health goals</a>
        </div>
      </header>
    </div>
  );
}

export default App;
