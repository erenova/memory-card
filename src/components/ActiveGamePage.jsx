import { useState, useEffect } from "react";
import memoryShowCharacters from "/memoryShow.json";
import memoryTimeCharacters from "/memoryTime.json";

//! FISHER YATES ALGORITHM
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getRandomCharacters(arr, num, difficulty) {
  let shuffled = shuffleArray(arr);
  if (difficulty === "easy") {
    shuffled = shuffled.filter((item) => {
      return item.difficulty !== undefined;
    });
  }
  return shuffled.slice(0, num);
}

let selectedCharacters = [];

const ActiveGamePage = ({
  difficulty,
  score,
  setScore,
  highScore,
  sethighScore,
  setShowPage,
  theme,
}) => {
  let cardNum;
  switch (difficulty) {
    case "easy":
      cardNum = 6;
      break;
    case "medium":
      cardNum = 10;
      break;
    case "hard":
      cardNum = 14;
      break;
  }
  let characters =
    theme === "memoryTime" ? memoryTimeCharacters : memoryShowCharacters;
  useEffect(() => {
    setScore(0);
  }, [setScore]);
  function clearGame() {
    selectedCharacters = [];
  }
  const [cards, setCards] = useState(
    getRandomCharacters(characters, cardNum, difficulty),
  );
  const handleShuffle = () => {
    let newShuffledCards = shuffleArray([...cards]);
    if (difficulty === "easy")
      newShuffledCards = getRandomCharacters(characters, cardNum, difficulty);
    setCards(newShuffledCards);
  };
  function playHand(charName) {
    if (selectedCharacters.includes(charName)) {
      setShowPage("lose");
      clearGame();
    } else {
      selectedCharacters.push(charName);
      setScore(score + 1);
      score >= highScore ? sethighScore(score + 1) : null;
      if (score + 1 === cardNum) {
        setShowPage("win");
        clearGame();
      } else {
        handleShuffle();
      }
    }
  }
  return (
    <div
      className={
        "flex flex-wrap gap-4 justify-center lg:grid lg:grid-cols-4 pb-10 " +
        (theme === "memoryTime" ? "text-lg" : "")
      }
    >
      {cards.map((character, index) => {
        return (
          <button
            onClick={() => {
              playHand(character.displayName);
            }}
            key={index}
          >
            <div className="bg-memoryShowWhite rounded-lg h-60 w-40 flex flex-col ">
              <div className="m-0 p-0 border-b-black border-b-[1px] text-black truncate">
                {character.displayName}
              </div>

              <img
                src={character.imageUrl}
                alt={character.displayName}
                className="object-contain w-full h-[80%]"
              />
            </div>
          </button>
        );
      })}
    </div>
  );
};
export default ActiveGamePage;
