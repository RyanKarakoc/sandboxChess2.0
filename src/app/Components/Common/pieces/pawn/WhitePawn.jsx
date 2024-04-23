"use client";
import Image from "next/image";
import whitePawn from "../../../../../../public/whitePieces/pawn.png";

const WhitePawn = () => {
  return (
    <div>
      <Image src={whitePawn} alt="white pawn"></Image>
    </div>
  );
};

export default WhitePawn;
