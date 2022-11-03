import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy = [
                ...state.map(el => {
                    return{...el}
                })
            ]
            if(action.payload === 'up'){
                stateCopy.sort((a,b) => {
                    return a.name.localeCompare(b.name)
                })
            }
            if(action.payload === 'down'){
                stateCopy.sort((a,b) => {
                    return b.name.localeCompare(a.name)
                })
            }
            return stateCopy // need to fix
        }
        case 'check': {
            let stateCopy = [
                ...state.filter(el => el.age > 18)
            ]
            return stateCopy // need to fix
        }
        default:
            return state
    }
}
