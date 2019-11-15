const initState = {
    user: [],
    error: null,
    loginSuccess: false,
  };
  
  const LoginReducer = (state = initState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          loginSuccess: true
        };
      case 'LOGIN_FAIL':
        return {
            ...state,
            error: action.error
        }
      default:
        return state;
    }
  };
  
  export default LoginReducer;