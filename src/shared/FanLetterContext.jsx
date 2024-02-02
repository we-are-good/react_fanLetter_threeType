import React, { createContext, useState } from "react";
export const FanLetterContext = createContext(null);

const example = [
  {
    id: 1,
    nickname: "nn",
    content: "멋진 아티스트",
    toWho: "IU",
    when: "2021.01.31",
  },
];

const FanLetterProvider = ({ children }) => {
  const [fanLetter, setFanLetter] = useState(example);
  const [content, setContent] = useState("");
  const [nickname, setNickname] = useState("");
  const [toWho, setToWho] = useState("IU");
  const [selectArtistName, setSelectArtistName] = useState("IU");

  const contentHandler = (event) => setContent(event.target.value);
  const nicknameHandler = (event) => setNickname(event.target.value);
  const toWhoHandler = (event) => setToWho(event.target.value);

  return (
    <FanLetterContext.Provider
      value={{
        fanLetter,
        setFanLetter,
        content,
        setContent,
        nickname,
        setNickname,
        toWho,
        setToWho,
        selectArtistName,
        setSelectArtistName,
        contentHandler,
        nicknameHandler,
        toWhoHandler,
      }}
    >
      {children}
    </FanLetterContext.Provider>
  );
};

export default FanLetterProvider;
