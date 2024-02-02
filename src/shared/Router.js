import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailContent from "../pages/DetailContent";
import { useState } from "react";
import EditionCard from "../pages/EditionCard";

const example = [
  {
    id: 1,
    nickname: "nn",
    content: "멋진 아티스트",
    toWho: "IU",
    when: "2021.01.31",
  },
];

const Router = () => {
  const [fanLetter, setFanLetter] = useState(example);
  const [content, setContent] = useState("");

  const contentHandler = (event) => setContent(event.target.value);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              fanLetter={fanLetter}
              setFanLetter={setFanLetter}
              content={content}
              contentHandler={contentHandler}
              setContent={setContent}
            />
          }
        />
        <Route
          path="/detailcontent/:id"
          element={
            <DetailContent fanLetter={fanLetter} setFanLetter={setFanLetter} />
          }
        />
        <Route
          path="/editioncard/:id"
          element={
            <EditionCard
              fanLetter={fanLetter}
              setFanLetter={setFanLetter}
              content={content}
              contentHandler={contentHandler}
              setContent={setContent}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
