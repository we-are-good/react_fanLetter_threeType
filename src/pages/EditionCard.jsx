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
import { useSelector, useDispatch } from "react-redux";

function EditionCard() {
  //edition 함수, 찾은 항목의 content를 수정할 수 있게 한다.

  const params = useParams();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const pageId = params.id;

  const clickedCard = (pageId) => {
    dispatch({
      type: "ClickFanLetter",
      payload: pageId,
    });
  };

  const clickedCardContent = clickedCard.content;
  console.log(clickedCardContent);
  const [{ id, nickname, when, toWho }] = clickedCard;

  const deletionCard = () => {
    dispatch({
      type: "FanLetterDeletion",
      payload: pageId,
    });
    navigation(`/`);
  };

  const contentEdition = (id, content) => {
    dispatch({
      type: "ContentEdition",
      payload: {
        id,
        content,
      },
    });
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
