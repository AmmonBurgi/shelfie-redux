const initialState = {
    id: '',
    username: ''
}

const GET_USER = 'GET_USER'
console.log(initialState)
export function getUser(userObj){
    // console.log(userObj)
    return {
        type: GET_USER,
        payload: userObj
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_USER:
            return {...state, ...action.payload}
        default:
            return state
    }
}