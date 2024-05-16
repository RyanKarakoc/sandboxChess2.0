"use client";
import { createContext, useContext, useState } from "react";

// Create a context to hold your global state
const GlobalStateContext = createContext();

// Create a provider component to wrap your application
export const GlobalStateProvider = ({ children }) => {
  const [startTile, setStartTile] = useState({});
  const [endTile, setEndTile] = useState({});
  const [moveNumber, setMoveNumber] = useState(0);
  const [moves, setMoves] = useState([]);

  const colourToMove = moveNumber % 2 === 0 ? "white" : "black";
  const previousMove = moves[moves.length - 1] || null;

  return (
    <GlobalStateContext.Provider
      value={{
        startTile,
        setStartTile,
        endTile,
        setEndTile,
        moveNumber,
        setMoveNumber,
        colourToMove,
        moves,
        setMoves,
        previousMove,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to access the global state and dispatch function
export const useGlobalState = () => useContext(GlobalStateContext);
