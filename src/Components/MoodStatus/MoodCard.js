import React from 'react'
import CatMoodImage from '../../Images/catMood.png';

export default function MoodCard({mood, index}) {
  return (
    <div key={index} className={` AvailableMoodContainer__card ${mood.name}`}>
      <section className='mood1'>
        <span>{mood.name}</span>
      </section>
      <section className='messageTime'>
        <span className='messageTime__message'>{mood.message}</span>
        <span className='messageTime__time'>{mood.time}</span>
      </section>
      <section>
        <img src={CatMoodImage} alt='cat' />
      </section>
    </div>
  );
}
