import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext();

  const signup = async (firstName, lastName, email, password) => {

    setIsLoading(true)
    setError(null)
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/api/user/signup",
        data: {firstName, lastName, email, password },
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.data

      if (response.status === 200) {
        localStorage.setItem('user', data)
        dispatch({ type: 'LOGIN', payload: data });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError(error)
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }
  
  return { signup, isLoading, error }
}