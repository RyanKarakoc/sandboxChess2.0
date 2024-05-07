"use client";
import { useState } from "react";
import Header from "../Components/Common/header/Header";
import Board from "../Components/Common/board/board";
import MoveList from "../Components/Common/moveList/moveList";

export default function Page() {
  const [moves, setMoves] = useState([]);

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <Board />
        <div className="mx-10">
          <MoveList />
        </div>
      </div>
    </>
  );
}
