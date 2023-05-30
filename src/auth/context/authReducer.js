import { types } from "../types/types";


export const authReducer = (state= {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state, //por si en el state llegan mas propiedades
                logged: true,
                user: action.payload
            }
        
        case types.logout:
            return {
                ...state,
                logged: false
            }
    
        default:
            return state
    }
}