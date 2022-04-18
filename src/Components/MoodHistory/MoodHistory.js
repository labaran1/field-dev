import React,{useContext} from 'react'
import './moodHistory.css'
import ColouredImage from '../../Images/coloured.png';
import AppContext from '../../Context/AppContext/AppContext';
import NoMood from '../MoodStatus/NoMood';
import AvailableMoods from '../MoodStatus/AvailableMoods';

export default function MoodHistory() {
    const appContext = useContext(AppContext);
    const { MoodHistory } = appContext;
  return (
    <main className='historyContainer'>
      <section className='historyContainer__historyHeader'>
        <div className='historyContainer__mainHeader'>
          <img src={ColouredImage} alt='cat' />
          <h2>Cat mood tracker™</h2>
        </div>

        <p>MOOD HISTORY</p>
      </section>

      {MoodHistory.length === 0 ? <NoMood /> : <AvailableMoods />}
    </main>
  );
}
