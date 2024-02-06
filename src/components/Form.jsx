import { artistes } from "../redux/config/configStore";
import { v4 as uuidv4 } from "uuid";
import GlobalStyle from "../GlobalStyles";
import {
  ArticleBox,
  CardIndex,
  InputIndex,
  EnrollmentButton,
} from "../style/FormStyle";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Form() {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const [nickname, setNickname] = useState("");
  const [toWho, setToWho] = useState("IU");

  const contentHandler = (event) => setContent(event.target.value);
  const nicknameHandler = (event) => setNickname(event.target.value);
  const toWhoHandler = (event) => setToWho(event.target.value);

  const FanLetterForm = () => {
    const today = new Date();
    const formatttedData = `${today.getFullYear()}. ${today.getMonth()}. ${today.getDay()}. ${today.getHours()} : ${today.getMinutes()}`;
    const id = uuidv4();
    if (!nickname || !content) {
      return alert("내용을 입력하세요.");
    }

    dispatch({
      type: "NewFanLetter",
      payload: {
        id,
        nickname,
        content,
        toWho,
        when: formatttedData,
      },
    });

    setNickname("");
    setContent("");
  };

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
        <EnrollmentButton onClick={FanLetterForm}>팬레터 등록</EnrollmentButton>
      </ArticleBox>
    </>
  );
}

export default Form;
