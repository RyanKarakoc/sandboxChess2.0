const styles = require("./styles");
import React, { useRef, useEffect } from "react";
import { useGlobalState } from "../context/GlobabStateProvider";
import { columnRef } from "../../../../../utils/columnRef";
import { pairedMove } from "../../../../../utils/pairedMoves";

const MoveList = () => {
  const { moves } = useGlobalState();

  console.log(moves);

  // creates array with moves paired
  const pairedMoves = pairedMove(moves);

  // Create a ref for the scrollable div
  const scrollableDivRef = useRef(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  };

  // Scroll to the bottom whenever new content is added
  useEffect(() => {
    scrollToBottom();
  }, [moves]);

  return (
    <>
      <div className={styles.moveListContainer}>
        <div ref={scrollableDivRef} className={styles.moveList}>
          <div className={styles.movesHeader}>Moves</div>
          {/*create a box for each pair of moves*/}
          {pairedMoves.map((pair, index) => {
            return (
              <div key={index} className={styles.movesContainer}>
                {pair.map((singleMove, moveIndex) => {
                  const isOddIndex = moveIndex % 2 === 0;
                  //   const bgColour = isOddIndex ? "bg-white" : "bg-neutral-400";
                  //   const textColour = isOddIndex ? "" : "text-black";
                  return (
                    <div
                      key={moveIndex}
                      className={
                        isOddIndex
                          ? styles.moves.whiteMove
                          : styles.moves.blackMove
                      }
                    >
                      {singleMove[1] === "♚" || singleMove[1] === "♔"
                        ? columnRef.indexOf(singleMove[2][0]) <
                          columnRef.indexOf(singleMove[3][0])
                          ? "O-O"
                          : "O-O-O"
                        : `${singleMove[1]} ${singleMove[3][0]}${singleMove[3][1]}`}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MoveList;
