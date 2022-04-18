import React,{useContext} from 'react'
import AppContext from '../../Context/AppContext/AppContext';
import MoodCard from './MoodCard';


export default function AvailableMoods() {
       const appContext = useContext(AppContext);
       const { MoodHistory } = appContext;
  return (
    <main className='AvailableMoodContainer'>
      {MoodHistory.map((mood, i) => (
       <MoodCard mood={mood} index={i}/>
      ))}
    </main>
  );
}
