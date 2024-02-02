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

function DetailContent({ fanLetter, setFanLetter }) {
  const params = useParams();
  const navigation = useNavigate();

  const clickedCard = fanLetter.filter((letter) => letter.id === params.id);
  const notClickedCard = fanLetter.filter((letter) => letter.id !== params.id);
  const [{ id, nickname, when, toWho, content }] = clickedCard;
  console.log(clickedCard);
  console.log(id);

  //deletion 함수, 찾은 항목을 제거할 수 있게 한다.
  const deletionCard = () => {
    setFanLetter(notClickedCard);
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
