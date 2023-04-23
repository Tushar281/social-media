const AuthReducer = (state, action)=>{
    switch (action.type){
        case "LOGIN_START":
            return{
                user: null,
                isFetching: true, 
                error: false
            };
        case "LOGIN_SUCCESS":
            return{
                user: action.payload,
                isFetching: false, 
                error: false
            };
        case "LOGIN_FAILURE":
            return{
                user: null,
                isFetching: false, 
                error: action.payload
            };
        case "FOLLOW":
            return{
                ...state,
                user:{
                    ...state.user,
                    followeing: [...state.user.followeing, action.payload]
                }
            };
        case "UNFOLLOW":
            return{
                ...state,
                user:{
                    ...state.user,
                    followeing: state.user.followeing.filter(followeing => followeing !== action.payload)
                }
            };
        case "LOGOUT":
            return{
                user: null,
                isFetching: false, 
                error: false
            };
        default:
            return state;
    }
}

export default AuthReducer;