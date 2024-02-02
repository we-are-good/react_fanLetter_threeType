import React from "react";
import { useContext } from "react";
import GlobalStyle from "../GlobalStyles";
import { useNavigate } from "react-router-dom";
import { LetterCard } from "../style/AdditionStyle";
import { ProFile } from "../style/AdditionStyle";
import { ContentBoxInCard } from "../style/AdditionStyle";
import { FanLetterContext } from "../shared/FanLetterContext";

function Addition() {
  const { fanLetter, selectArtistName } = useContext(FanLetterContext);
  const addList = fanLetter.filter(
    (letter) => letter.toWho === selectArtistName
  );

  const navigate = useNavigate();

  return (
    <div>
      <GlobalStyle />
      {addList.map((letter) => {
        return (
          <div key={letter.id}>
            <LetterCard onClick={() => navigate(`/detailcontent/${letter.id}`)}>
              {console.log(fanLetter)}
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
