const thisViewIdReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_THIS_VIEW_ID':
      return action.payload;
    default:
      return state;
  }
};

export default thisViewIdReducer;
