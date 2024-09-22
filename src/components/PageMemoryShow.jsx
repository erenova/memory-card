import { useState, useEffect } from "react";
import Loader from "./Loader";
import Scoreboard from "./Scoreboard";
import { FaExchangeAlt } from "react-icons/fa";

import ActiveGamePage from "./ActiveGamePage";
import EndGamePage from "./EndGamePage";
import Popover from "./Popover";

const PageMemoryShow = ({ setPage }) => {
  const [loading, setLoading] = useState(true);
  const [showPage, setShowPage] = useState("main");
  const [difficulty, setDifficulty] = useState("easy");
  const [score, setScore] = useState(0);
  const [highScore, sethighScore] = useState(0);

  useEffect(() => {
    // Create a new image object for preloading
    const img = new Image();
    img.src =
      window.innerWidth >= 1024
        ? "src/assets/memoryShowBg.png"
        : "src/assets/memoryShowBgMobile.png";

    img.onload = () => {
      // When the image is fully loaded, set loading to false
      setLoading(false);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="fixed top-0 w-full min-h-screen -z-20 lg:bg-memoryShow bg-memoryShowMobile bg-cover select-none pointer-events-none"></div>
          <div className="w-full h-full text-center pt-8 flex  items-center flex-col text-white font-memoryShowText text-3xl">
            <div className="container flex flex-col justify-center items-center">
              <div className="pb-6 text-white ">
                <div className="text-6xl lg:text-7xl font-memoryShowText memory-show-logo select-none">
                  MEMORY SHOW
                </div>
                <div
                  className={
                    "lg:absolute lg:left-40 lg:top-32 lg:text-6xl " +
                    (showPage === "game" ||
                    showPage === "lose" ||
                    showPage === "win"
                      ? "visible"
                      : "hidden")
                  }
                >
                  <Scoreboard currentScore={score} highScore={highScore} />
                </div>
              </div>
              {showPage === "difficulty" && (
                <div className="flex flex-col">
                  <div className="text-5xl">difficulty</div>
                  <div className="grid grid-cols-3 grid-rows-[minmax(0,1fr),150px]">
                    <div className="self-end place-self-center">
                      <label htmlFor="easy">
                        <img
                          src="src/assets/rigby.png"
                          alt=""
                          className="h-[100px] md:h-[140px] cursor-pointer"
                        />
                      </label>
                    </div>
                    <button
                      id="easy"
                      onClick={() => {
                        setDifficulty("easy");
                        setShowPage("game");
                      }}
                      className="col-start-1 row-start-2 self-start place-self-center text-memoryShowBlack p-2 bg-memoryShowWhite rounded-lg px-6 mt-10 w-24 h-14 text-center justify-center items-center flex"
                    >
                      LAZY
                    </button>
                    <div className="self-end place-self-center">
                      <label htmlFor="medium">
                        <img
                          src="src/assets/skips.png"
                          alt=""
                          className="h-[140px] md:h-[200px] cursor-pointer"
                        />
                      </label>
                    </div>
                    <button
                      id="medium"
                      onClick={() => {
                        setDifficulty("medium");
                        setShowPage("game");
                      }}
                      className="col-start-2 row-start-2 self-start place-self-center text-memoryShowBlack p-2 bg-memoryShowWhite rounded-lg px-6 mt-10 w-24 h-14 text-center justify-center items-center flex"
                    >
                      TOUGH
                    </button>
                    <div className="self-end place-self-center">
                      <label htmlFor="hard">
                        <img
                          src="src/assets/antipops.png"
                          alt=""
                          className="h-[200px] md:h-[280px] cursor-pointer"
                        />
                      </label>
                    </div>
                    <button
                      id="hard"
                      onClick={() => {
                        setDifficulty("hard");
                        setShowPage("game");
                      }}
                      className="self-start place-self-center text-memoryShowBlack p-2 bg-memoryShowWhite rounded-lg px-6 mt-10 w-24 h-14 text-center justify-center items-center flex"
                    >
                      EXPERT
                    </button>
                  </div>
                </div>
              )}

              {showPage === "main" && (
                <>
                  <button
                    onClick={() => {
                      setShowPage("difficulty");
                    }}
                    className="bg-memoryShowBlue fixed bottom-52 lg:bottom-60 rounded-md font-memoryShowStart w-60 lg:w-72 text-6xl lg:text-7xl p-2 hover:ring-offset-1 hover:ring-1"
                  >
                    <span className="drop-shadow-lg">Start</span>
                  </button>
                  <div className="pt-8 flex gap-4 lg:gap-8 fixed bottom-32 lg:bottom-20 lg:right-20">
                    <Popover />

                    <button
                      onClick={() => {
                        setPage("memoryTime");
                      }}
                      className=" bg-memoryShowWhite rounded-md text-4xl lg:text-5xl p-2 hover:ring-memoryShowBlue hover:ring-1"
                    >
                      <span className="drop-shadow-lg text-[#4c6153]">
                        <FaExchangeAlt />
                      </span>
                    </button>
                  </div>
                </>
              )}

              {showPage === "game" && (
                <ActiveGamePage
                  difficulty={difficulty}
                  sethighScore={sethighScore}
                  setScore={setScore}
                  score={score}
                  highScore={highScore}
                  setShowPage={setShowPage}
                />
              )}
              {showPage === "win" && (
                <EndGamePage
                  gameState="win"
                  difficulty={difficulty}
                  setShowPage={setShowPage}
                  setScore={setScore}
                />
              )}
              {showPage === "lose" && (
                <EndGamePage
                  gameState="lose"
                  difficulty={difficulty}
                  setShowPage={setShowPage}
                  setScore={setScore}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PageMemoryShow;
