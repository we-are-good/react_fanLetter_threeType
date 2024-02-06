import React from "react";
import GlobalStyle from "../GlobalStyles";
import { useNavigate, useParams } from "react-router-dom";
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
import { useSelector, useDispatch } from "react-redux";

function DetailContent() {
  const params = useParams();
  const navigation = useNavigate();

  const totalFanLetter = useSelector((state) => state.FanLetterForm);
  console.log(totalFanLetter);
  const pageId = parseInt(params.id, 10);

  const clickedCard = totalFanLetter.find((letter) => letter.id === pageId);
  console.log(clickedCard);
  const [{ id, nickname, when, toWho, content }] = clickedCard;

  //deletion 함수, 찾은 항목을 제거할 수 있게 한다.
  const deletionCard = () => {
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
        <DetailContentText>{content}</DetailContentText>
        <DetailContentButtons>
          <BlackSmallButton onClick={() => navigation(`/editioncard/${id}`)}>
            수정
          </BlackSmallButton>
          <BlackSmallButton onClick={deletionCard}>삭제</BlackSmallButton>
        </DetailContentButtons>
      </DetailContentArticle>
    </div>
  );
}

export default DetailContent;
