import React, { useContext } from 'react'
import MoodHistory from '../MoodHistory/MoodHistory'
import MoodSelector from '../MoodSelector/MoodSelector'

export default function  Home() {

    return (
    <div style={{display:'flex', justifyContent:"space-around" ,  margin:'auto',marginTop:"100px"}}>
    <MoodSelector/>
    <MoodHistory/>
    
    </div>
  )
}
