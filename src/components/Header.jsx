import React from "react";
import Form from "./Form";
import GlobalStyle from "../GlobalStyles";
import styled from "styled-components";
import { HeadPart } from "../style/HeaderStyle";
import { TitleName } from "../style/HeaderStyle";
import { Banner } from "../style/HeaderStyle";
import { useState } from "react";

export const artistes = ["IU", "SIA", "Eminem", "Selena Gomez"];

function Header({
  fanLetter,
  setFanLetter,
  content,
  setContent,
  contentHandler,
}) {
  function selectShift(selectedname) {
    const artistSelected = artistes.filter((artist) => artist === selectedname);
    setSelectArtistName(...artistSelected);
  }

  const [selectArtistName, setSelectArtistName] = useState("IU");

  const MemberName = styled.button`
    background-color: ${(props) =>
      props.name === selectArtistName ? "blue" : "darkgreen"};
    color: white;
    border-radius: 0.5rem;
    font-size: 2rem;
  `;

  return (
    <>
      <GlobalStyle />
      <HeadPart>
        <TitleName>팬레터 콜렉션</TitleName>

        <Banner>
          <MemberName
            name={artistes[0]}
            onClick={() => {
              selectShift(artistes[0]);
            }}
          >
            {artistes[0]}
          </MemberName>

          <MemberName
            name={artistes[1]}
            onClick={() => {
              selectShift(artistes[1]);
            }}
          >
            {artistes[1]}
          </MemberName>

          <MemberName
            name={artistes[2]}
            onClick={() => {
              selectShift(artistes[2]);
            }}
          >
            {artistes[2]}
          </MemberName>

          <MemberName
            name={artistes[3]}
            onClick={() => {
              selectShift(artistes[3]);
            }}
          >
            {artistes[3]}
          </MemberName>
        </Banner>
      </HeadPart>

      <Form
        fanLetter={fanLetter}
        setFanLetter={setFanLetter}
        content={content}
        setContent={setContent}
        contentHandler={contentHandler}
        selectArtistName={selectArtistName}
      />
    </>
  );
}

export default Header;
