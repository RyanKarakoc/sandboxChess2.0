"use client";
import { useState } from "react";
import Header from "../Components/Common/header/Header";

export default function Page() {
  const [moves, setMoves] = useState([]);

  return (
    <>
      <Header />
      <h1>Sandbox</h1>
    </>
  );
}
