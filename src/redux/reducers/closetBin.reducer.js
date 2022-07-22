const closetBinReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CLOSET_BINS':
      return action.payload;
    default:
      return state;
  }
};

export default closetBinReducer;
