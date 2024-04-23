"use client";
import Image from "next/image";
import blackPawn from "../../../../../../public/blackPieces/pawn.png";

const BlackPawn = () => {
  return (
    <div>
      <Image src={blackPawn} alt="black pawn"></Image>
    </div>
  );
};

export default BlackPawn;
