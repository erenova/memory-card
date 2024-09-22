import { useState, useEffect } from "react";
import Loader from "./Loader";
import Scoreboard from "./Scoreboard";
import { FaExchangeAlt } from "react-icons/fa";
import { MdQuestionMark, MdMusicOff } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";
import ActiveGamePage from "./ActiveGamePage";

const PageMemoryShow = ({ setPage }) => {
  const [loading, setLoading] = useState(true);
  const [showPage, setShowPage] = useState("main");
  const [difficulty, setDifficulty] = useState("easy");
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

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
          <div className="fixed top-0 w-full min-h-full -z-20 lg:bg-memoryShow bg-memoryShowMobile bg-cover select-none pointer-events-none"></div>
          <div className="w-full h-full text-center pt-8 flex  items-center flex-col text-white font-memoryShowText text-3xl">
            <div className="container flex flex-col justify-center items-center">
              <div className="pb-6 text-white ">
                <div className="text-6xl lg:text-7xl font-memoryShowText memory-show-logo select-none">
                  MEMORY SHOW
                </div>
                <div
                  className={
                    "lg:absolute lg:left-40 lg:top-32 lg:text-6xl " +
                    (showPage === "game" ? "" : "hidden")
                  }
                >
                  <Scoreboard currentScore="4" highScore="15" />
                </div>
              </div>
              {showPage === "difficulty" && (
                <div className="flex flex-col">
                  <div className="text-5xl">difficulty</div>
                  <div className="grid grid-cols-3 grid-rows-[minmax(0,1fr),150px]">
                    <div className="self-end place-self-center">
                      <img
                        src="src/assets/rigby.png"
                        alt=""
                        className="h-[100px] md:h-[140px]"
                      />
                    </div>
                    <button
                      onClick={() => {
                        setDifficulty("easy");
                        setShowPage("game");
                      }}
                      className="col-start-1 row-start-2 self-start place-self-center text-memoryShowBlack p-2 bg-memoryShowWhite rounded-lg px-6 mt-10 w-24 h-14 text-center justify-center items-center flex"
                    >
                      LAZY
                    </button>
                    <div className="self-end place-self-center">
                      <img
                        src="src/assets/skips.png"
                        alt=""
                        className="h-[140px] md:h-[200px]"
                      />
                    </div>
                    <button
                      onClick={() => {
                        setDifficulty("medium");
                        setShowPage("game");
                      }}
                      className="col-start-2 row-start-2 self-start place-self-center text-memoryShowBlack p-2 bg-memoryShowWhite rounded-lg px-6 mt-10 w-24 h-14 text-center justify-center items-center flex"
                    >
                      TOUGH
                    </button>
                    <div className="self-end place-self-center">
                      <img
                        src="src/assets/antipops.png"
                        alt=""
                        className="h-[200px] md:h-[280px]"
                      />
                    </div>
                    <button
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
                    <button className=" bg-memoryShowWhite rounded-md text-4xl lg:text-5xl p-2 hover:ring-memoryShowBlue hover:ring-1">
                      <span className="drop-shadow-lg text-[#692b6f]">
                        <MdMusicOff />
                      </span>
                    </button>
                    <button className=" bg-memoryShowWhite rounded-md text-4xl lg:text-5xl p-2 hover:ring-memoryShowBlue hover:ring-1">
                      <span className="drop-shadow-lg text-[#c2759d]">
                        <MdQuestionMark />
                      </span>
                    </button>
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
                  setHighestScore={setHighestScore}
                  setScore={setScore}
                  score={score}
                  highestScore={highestScore}
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
