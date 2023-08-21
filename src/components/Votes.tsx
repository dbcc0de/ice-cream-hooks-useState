import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  let [totalVotes, setTotalVotes] = useState(0);
  let [chocolateVotes, setChocolateVotes] = useState(0);
  let [vanillaVotes, setVanillaVotes] = useState(0);
  let [strawberryVotes, setStrawberryVotes] = useState(0);

  const voteChocolate = () => {
    setChocolateVotes(chocolateVotes + 1);
  };
  const voteVanilla = () => {
    setVanillaVotes(vanillaVotes + 1);
  };
  const voteStrawberry = () => {
    setStrawberryVotes(strawberryVotes + 1);
  };

  const voteTotal = () => {
    setTotalVotes(totalVotes + 1);
  };

  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <div className="flavor-button-container">
        <button
          onClick={() => {
            voteChocolate();
            voteTotal();
          }}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            voteVanilla();
            voteTotal();
          }}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            voteStrawberry();
            voteTotal();
          }}
        >
          Strawberry
        </button>
      </div>
      <div className="vote-results">
        <p style={{ display: totalVotes ? "none" : "block" }}>No votes yet.</p>
        <div style={{ display: chocolateVotes ? "block" : "none" }}>
          Chocolate: <span>{chocolateVotes}</span>
          <span>{` (${((chocolateVotes / totalVotes) * 100).toFixed(
            1
          )}%)`}</span>
          <div
            style={{
              width: `${(chocolateVotes / totalVotes) * 100}%`,
              backgroundColor: "#4f2c2c",
            }}
          ></div>
        </div>
        <div style={{ display: vanillaVotes ? "block" : "none" }}>
          Vanilla: <span>{vanillaVotes}</span>
          <span>{` (${((vanillaVotes / totalVotes) * 100).toFixed(1)}%)`}</span>
          <div
            style={{
              width: `${(vanillaVotes / totalVotes) * 100}%`,
              backgroundColor: "#cbc0ac",
            }}
          ></div>
        </div>
        <div style={{ display: strawberryVotes ? "block" : "none" }}>
          Strawberry: <span>{strawberryVotes}</span>
          <span>{` (${((strawberryVotes / totalVotes) * 100).toFixed(
            1
          )}%)`}</span>
          <div
            style={{
              width: `${(strawberryVotes / totalVotes) * 100}%`,
              backgroundColor: "#de8c91",
            }}
          >
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Votes;
