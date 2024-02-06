import { FanLetter } from "./fanLetterFormModule";

export const FanLetterContentEdition = "FanLetterContentEdition";

export const fanLetterContentEdition = (id, content) => {
  return {
    type: FanLetter,
    payload: {
      id,
      content,
    },
  };
};

const fanLetterContentEditionForm = (state = FanLetter, action) => {
  switch (action.type) {
    case "ContentEdition":
      return [...state]
        .filter((letter) => letter.id === action.payload.id)
        .replace("content", action.payload.content);

    default:
      return state;
  }
};
export default fanLetterContentEditionForm;
