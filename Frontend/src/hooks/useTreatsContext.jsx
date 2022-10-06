import {useContext} from 'react'
import {TreatsContext} from '../Context/treatContext'

export function useTreatsContext () {
    const context = useContext(TreatsContext)
  
    if(!context) {
      throw Error('useTreatsContext must be used inside an WorkoutsContextProvider')
    }
  
    return context
  }