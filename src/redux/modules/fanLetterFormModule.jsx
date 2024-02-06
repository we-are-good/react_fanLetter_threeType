export const FanLetter = "FanLetter";

const initialState = [
  {
    id: 1,
    nickname: "nn",
    content: "멋진 아티스트",
    toWho: "IU",
    when: "2021.01.31",
  },
];

export const fanLetter = (id, nickname, content, toWho, when) => {
  return {
    type: FanLetter,
    payload: {
      id,
      nickname,
      content,
      toWho,
      when,
    },
  };
};

const FanLetterForm = (state = initialState, action) => {
  switch (action.type) {
    case "NewFanLetter":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default FanLetterForm;
