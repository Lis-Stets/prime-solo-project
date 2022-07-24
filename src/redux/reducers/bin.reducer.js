const binReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BIN':
      return action.payload;
    default:
      return state;
  }
};

export default binReducer;
