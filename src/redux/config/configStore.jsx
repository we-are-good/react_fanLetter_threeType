import { combineReducers } from "redux";
import { createStore } from "redux";
import HeaderArtistSelection from "../modules/fanLetterModule";
import FanLetterForm from "../modules/fanLetterFormModule";
import fanLetterDeletionForm from "../modules/fanLetterDeletionModal";
import fanLetterClickForm from "../modules/fanLetterClickModule";
export const artistes = ["IU", "SIA", "Eminem", "Selena Gomez"];

const rootReducer = combineReducers({
  HeaderArtistSelection,
  FanLetterForm,
  fanLetterDeletionForm,
  fanLetterClickForm,
});
const store = createStore(rootReducer);

export default store;
