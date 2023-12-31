const initialState = {
    accounts: [],
  };
  
  const accountReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ACCOUNTS':
        return {
          ...state,
          accounts: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default accountReducer;
  