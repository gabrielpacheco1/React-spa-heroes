import React, { useReducer } from 'react'
import { AuthContext, authReducer } from './index'
import { types } from '../types/types'


const init = () => {
  const user= JSON.parse(localStorage.getItem('user'))
  return {
    logged: !!user, //Si lo encuentra => false -> true. Si no => true -> false,
    user
  }
}


export const AuthProvider = ({children}) => {

    const [authState, dispatch]= useReducer(authReducer, {}, init)

    const login = (name='') => {
      
      const user= { id: 'ABC123', name }
      const action= {type: types.login, payload: user}

      localStorage.setItem('user', JSON.stringify(user))

      dispatch(action)
    }

    const logout = () => {

      localStorage.removeItem('user')
      const action= {type: types.logout}
      dispatch(action)
    }

  return (
    <AuthContext.Provider value={{
      ...authState,
      //Methods
      login,
      logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}

