const initialState = {
  matkul: [],
};

const matkulReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "KEEP_MATKUL":
      return {
        ...prevState,
        matkul: action.payload,
      };
    default:
      return prevState;
  }
};

export default matkulReducer;
