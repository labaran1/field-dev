import React from 'react'
import UnColouredImage from '../../Images/gray.png';


export default function NoMood() {
  return (
    <div className='noMoodHistory'>
      <img src={UnColouredImage} alt='gray cat logo' />
      <p>No mood history to show yet</p>
    </div>
  );
}
