import React from "react";
import {
  DetailContentArticle,
  DetailContentHeader,
  IdImageNicknameWhen,
  DetailContentIdImageNickname,
  DetailContentIdImage,
  DetailContentWhen,
  DetailContentNickname,
  DetailContentToWho,
  DetailContentText,
  DetailContentButtons,
  BlackSmallButton,
} from "../style/DetailContentStyle";
import { InputIndex } from "../style/FormStyle";
import GlobalStyle from "../GlobalStyles";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FanLetterContext } from "../shared/FanLetterContext";

function EditionCard() {
  //edition 함수, 찾은 항목의 content를 수정할 수 있게 한다.
  const { fanLetter, setFanLetter, content, setContent, contentHandler } =
    useContext(FanLetterContext);
  const params = useParams();
  const navigation = useNavigate();
  const clickedCard = fanLetter.filter((letter) => letter.id === params.id);
  const clickedCardContent = clickedCard.content;
  const [{ id, nickname, when, toWho }] = clickedCard;
  const notClickedCard = fanLetter.filter((letter) => letter.id !== params.id);

  const deletionCard = () => {
    setFanLetter(notClickedCard);
    navigation(`/`);
  };

  const contentEdition = () => {
    const editedFanLetter = {
      id: id,
      nickname: nickname,
      content,
      toWho: toWho,
      when: when,
    };
    console.log(id);
    setFanLetter(notClickedCard);
    setFanLetter((prev) => [editedFanLetter, ...prev]);
    setContent("");
    navigation(`/`);
  };

  return (
    <div>
      <GlobalStyle />
      <DetailContentArticle>
        <DetailContentHeader>
          <IdImageNicknameWhen>
            <DetailContentIdImageNickname>
              <DetailContentIdImage>이미지</DetailContentIdImage>
              <DetailContentNickname>{nickname}</DetailContentNickname>
            </DetailContentIdImageNickname>
            <DetailContentWhen>{when}</DetailContentWhen>
          </IdImageNicknameWhen>
          <DetailContentToWho>{toWho}</DetailContentToWho>
        </DetailContentHeader>
        <DetailContentText>
          <InputIndex
            type="text"
            defaultValue={clickedCardContent}
            placeholder="최대 100자까지만 작성할 수 있습니다."
            maxLength={100}
            value={content}
            onChange={contentHandler}
          />
        </DetailContentText>
        <DetailContentButtons>
          <BlackSmallButton
            onClick={() => {
              contentEdition();
            }}
          >
            완료
          </BlackSmallButton>
          <BlackSmallButton onClick={deletionCard}>삭제</BlackSmallButton>
        </DetailContentButtons>
      </DetailContentArticle>
    </div>
  );
}

export default EditionCard;
