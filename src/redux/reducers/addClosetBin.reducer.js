const addClosetBinReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CLOSET_OR_BIN':
      return action.payload;
    default:
      return state;
  }
};

export default addClosetBinReducer;
