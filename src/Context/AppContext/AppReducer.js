/* eslint-disable import/no-anonymous-default-export */
import { ADD_MOOD } from '../types'

export default (state , { type, payload }) => {
  switch (type) {
    case ADD_MOOD:{
      console.log(payload.value)
     return {
        ...state,
        MoodHistory: [payload.value, ...state.MoodHistory, ]
       
     }
    }



  default:
    return state
  }
}
