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
        ? "src/assets/memoryTimeBg.png"
        : "src/assets/memoryTimeBgMobile.png";

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
          <div className="fixed top-0 w-full min-h-screen -z-20 lg:bg-memoryTime bg-memoryTimeMobile bg-cover select-none pointer-events-none"></div>
          <div className="w-full h-full text-center pt-8 flex  items-center flex-col text-white font-memoryTimeText text-2xl">
            <div className="container flex flex-col justify-center items-center">
              <div className="pb-6 text-white font-memoryTimeScore">
                <div className=" select-none">
                  <img
                    className="w-[350px] lg:w-[450px]"
                    src="src/assets/memoryTimeLogojake.png"
                    alt=""
                  />
                </div>

                <div
                  className={
                    "lg:absolute lg:left-40 lg:top-32 lg:text-6xl text-black " +
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
                  <div className="text-4xl text-black">difficulty</div>
                  <div className="grid grid-cols-3 grid-rows-[minmax(0,1fr),150px]">
                    <div className="self-end place-self-center">
                      <label htmlFor="easy">
                        <img
                          src="src/assets/bananaGuard.png"
                          alt=""
                          className="h-[100px] md:h-[180px] cursor-pointer"
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
                      Candy
                    </button>
                    <div className="self-end place-self-center">
                      <label htmlFor="medium">
                        <img
                          src="src/assets/flameGuard.png"
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
                      Flame
                    </button>
                    <div className="self-end place-self-center">
                      <label htmlFor="hard">
                        <img
                          src="src/assets/scarab.png"
                          alt=""
                          className="h-[150px] md:h-[200px] cursor-pointer"
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
                      Cosmic
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
                    className="bg-memoryTimeBlue   font-memoryTimeText w-40 text-4xl lg:text-5xl p-2  fixed bottom-52 lg:bottom-60 rounded-md  lg:w-60 hover:ring-offset-1 hover:ring-1"
                  >
                    <span className="drop-shadow-lg">start</span>
                  </button>
                  <div className="pt-8 flex gap-4 lg:gap-8 fixed bottom-32 lg:bottom-20 lg:right-20">
                    <Popover theme="memoryTime" />

                    <button
                      onClick={() => {
                        setPage("memoryShow");
                      }}
                      className=" bg-white rounded-md text-4xl lg:text-5xl p-2 hover:ring-memoryTimeBlue hover:ring-1"
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
                  theme="memoryTime"
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
                  theme="memoryTime"
                  gameState="win"
                  difficulty={difficulty}
                  setShowPage={setShowPage}
                  setScore={setScore}
                />
              )}
              {showPage === "lose" && (
                <EndGamePage
                  theme="memoryTime"
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
