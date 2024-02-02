import React, { useContext } from "react";
import { artistes } from "./Header";
import { v4 as uuidv4 } from "uuid";
import GlobalStyle from "../GlobalStyles";
import { ArticleBox } from "../style/FormStyle";
import { CardIndex } from "../style/FormStyle";
import { InputIndex } from "../style/FormStyle";
import { EnrollmentButton } from "../style/FormStyle";
import { FanLetterContext } from "../shared/FanLetterContext";

function Form() {
  const {
    fanLetter,
    setFanLetter,
    content,
    setContent,
    nickname,
    setNickname,
    toWho,
    contentHandler,
    nicknameHandler,
    toWhoHandler,
  } = useContext(FanLetterContext);

  const fanLetterAddition = () => {
    const today = new Date();
    const formatttedData = `${today.getFullYear()}. ${today.getMonth()}. ${today.getDay()}. ${today.getHours()} : ${today.getMinutes()}`;

    const newFanLetter = {
      id: uuidv4(),
      nickname,
      content,
      toWho,
      when: formatttedData,
    };
    if (!nickname || !content) {
      return alert("내용을 입력하세요.");
    }
    setFanLetter((fanLetter) => [newFanLetter, ...fanLetter]);
    setNickname("");
    setContent("");
  };
  console.log(fanLetter);

  return (
    <>
      <GlobalStyle />
      <ArticleBox>
        <CardIndex>
          닉네임 :
          <InputIndex
            type="text"
            placeholder="최대 20글자까지 작성할 수 있습니다."
            maxLength={20}
            value={nickname}
            onChange={nicknameHandler}
          />
        </CardIndex>
        <CardIndex>
          내용 :
          <InputIndex
            type="text"
            placeholder="최대 100자까지만 작성할 수 있습니다."
            maxLength={100}
            value={content}
            onChange={contentHandler}
          />
        </CardIndex>
        <CardIndex sizeOfFont="1rem">
          누구에게 보내실 건가요?
          <select value={toWho} onChange={toWhoHandler}>
            <option value={artistes[0]} selected>
              {artistes[0]}
            </option>
            <option value={artistes[1]}>{artistes[1]}</option>
            <option value={artistes[2]}>{artistes[2]}</option>
            <option value={artistes[3]}>{artistes[3]}</option>
          </select>
        </CardIndex>
        <EnrollmentButton onClick={fanLetterAddition}>
          팬레터 등록
        </EnrollmentButton>
      </ArticleBox>
    </>
  );
}

export default Form;
