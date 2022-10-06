import {createContext, useReducer} from 'react'

export const TreatsContext = createContext();

export const treatsReducer = (state, action) =>{
    switch (action.type){
        case 'SET_TREATS':
            return {
                treats: action.payload
            }
        case 'CREATE_TREAT':
            return {
                treats: [action.payload, ...state.treats]
            }
        case 'DELETE_TASK':
            return{
                treats: state.treats.filter((treat)=>treat._id !== action.payload._id)
            }
        default: 
            return state
    }
}

export const TreatContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(treatsReducer, {
        treats: null
    })


    return (
        <TreatsContext.Provider value={{...state, dispatch}}>
            {children}
        </TreatsContext.Provider> 
    )
} 


