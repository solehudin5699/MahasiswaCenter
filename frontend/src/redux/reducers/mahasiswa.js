const initialState = {
  mahasiswa: [],
};

const mhsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "KEEP_MAHASISWA":
      return {
        ...prevState,
        mahasiswa: action.payload,
      };
    default:
      return prevState;
  }
};

export default mhsReducer;
