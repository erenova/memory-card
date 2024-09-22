const Scoreboard = ({ highScore, currentScore }) => {
  return (
    <div className={"text-start"}>
      <div>HI SCORE: {highScore}</div>
      <div className="">SCORE: {currentScore}</div>
    </div>
  );
};

export default Scoreboard;
