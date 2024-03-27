"use client";
import { useState } from "react";
import Header from "../Components/Common/header/Header";
import Board from "../Components/Common/board/board";

export default function Page() {
  const [moves, setMoves] = useState([]);

  return (
    <>
      <Header />
      <Board />
    </>
  );
}
