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
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to access the global state and dispatch function
export const useGlobalState = () => useContext(GlobalStateContext);
