import React from "react";
import Header from "../components/Header";

function Home({
  fanLetter,
  setFanLetter,
  content,
  contentHandler,
  setContent,
}) {
  return (
    <>
      <Header
        fanLetter={fanLetter}
        setFanLetter={setFanLetter}
        content={content}
        setContent={setContent}
        contentHandler={contentHandler}
      />
    </>
  );
}

export default Home;
