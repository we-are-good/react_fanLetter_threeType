import { FanLetter } from "./fanLetterFormModule";

export const FanLetterClick = "FanLetterClick";

export const fanLetterClick = (id) => {
  return {
    type: FanLetter,
    payload: id,
  };
};

const fanLetterClickForm = (state = FanLetter, action) => {
  console.log(action);
  switch (action.type) {
    case "ClickFanLetter":
      return [...state].filter((letter) => letter.id === action.payload);

    default:
      return state;
  }
};
export default fanLetterClickForm;
