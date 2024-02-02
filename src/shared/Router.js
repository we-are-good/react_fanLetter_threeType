import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailContent from "../pages/DetailContent";
import EditionCard from "../pages/EditionCard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailcontent/:id" element={<DetailContent />} />
        <Route path="/editioncard/:id" element={<EditionCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
