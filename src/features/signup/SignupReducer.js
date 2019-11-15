const initState = {
    user: [],
    error: null,
    signupSuccess: false,
  };
  
  const SignUpReducer = (state = initState, action) => {
    switch (action.type) {
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          user: action.payload,
          signupSuccess: true
        };
      case 'SIGNUP_FAIL':
        return {
            ...state,
            error: action.error
        }
      default:
        return state;
    }
  };
  
  export default SignUpReducer;