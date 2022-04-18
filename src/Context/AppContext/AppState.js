import React, {useReducer,} from 'react'
import AppContext from './AppContext'
import AppReducer from './AppReducer'
import { ADD_MOOD } from '../types'






const AppState = props => {



    const initialState = {
      sample: 'Hello Labs',
      MoodHistory: [
      ],
    };
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const updateHistory =(val)=> {
        dispatch({
            type:ADD_MOOD,
            payload:{
                value:val
            }
        })
    }

    return (
        <AppContext.Provider 
        value={{
            sample:state.sample,
            // Mood:state.Mood,
            MoodHistory:state.MoodHistory,
            updateHistory
        }}
        >
            {props.children }
        </AppContext.Provider>
    )
}


export default AppState