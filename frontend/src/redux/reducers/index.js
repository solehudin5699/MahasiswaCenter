import { combineReducers } from "redux";
import matkulReducer from "./matkul";
import mhsReducer from "./mahasiswa";
//Combine reducers
const indexReducer = combineReducers({
  matkul: matkulReducer,
  mahasiswa: mhsReducer,
});

export default indexReducer;
