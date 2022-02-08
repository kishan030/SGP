const initialState={
    loginAuth:false
}
export const routeAuth =(state=initialState,action={}) =>{
    switch(action.type){
        case 'Change_Login_Auth':
            return Object.assign({}, state , {loginAuth: action.payload})
        default: return state
    }
}