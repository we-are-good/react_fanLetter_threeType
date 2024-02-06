import React from "react";
import GlobalStyle from "../GlobalStyles";
import { useNavigate } from "react-router-dom";
import { LetterCard, ProFile, ContentBoxInCard } from "../style/AdditionStyle";
import { useSelector } from "react-redux";

function Addition() {
  const selectedName = useSelector((state) => {
    return state.HeaderArtistSelection.selectedArtistName;
  });
  const totalFanLetter = useSelector((state) => state.FanLetterForm);

  const selectedArtistFanLetter = totalFanLetter.filter(
    (letter) => letter.toWho === selectedName
  );
  const navigate = useNavigate();

  return (
    <div>
      <GlobalStyle />
      {selectedArtistFanLetter.map((letter) => {
        return (
          <div key={letter.id}>
            <LetterCard onClick={() => navigate(`/detailcontent/${letter.id}`)}>
              <ProFile>사진</ProFile>
              <ContentBoxInCard>
                <div>{letter.nickname}</div>
                <div>{letter.when}</div>
                <div>{letter.content}</div>
                <div>{letter.toWho}</div>
              </ContentBoxInCard>
            </LetterCard>
          </div>
        );
      })}
    </div>
  );
}

export default Addition;
