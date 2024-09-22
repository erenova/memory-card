import { MdHome } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";

const EndGamePage = ({
  difficulty,
  gameState,
  setShowPage,
  setScore,
  theme,
}) => {
  return (
    <>
      <div className={theme === "memoryTime" ? "text-black" : ""}>
        {difficulty === "easy" && gameState == "win" && (
          <>
            {theme === "memoryTime" ? (
              <>
                <p>You beat the Ice King</p>
              </>
            ) : (
              <>
                <p>You beat the Garrett Bobby Ferguson</p>
                <img className="max-h-80" src="./gifs/easyWin.webp" />
              </>
            )}
          </>
        )}
        {difficulty === "easy" && gameState == "lose" && (
          <>
            {theme === "memoryTime" ? (
              <>
                <p>You Killed Jake</p>
              </>
            ) : (
              <>
                <p>You Killed Rigby</p>
                <img className="max-h-80" src="./gifs/easyLose.webp" />
              </>
            )}
          </>
        )}
        {difficulty === "medium" && gameState == "win" && (
          <>
            {theme === "memoryTime" ? (
              <>
                <p>You beat The Lich</p>
              </>
            ) : (
              <>
                {" "}
                <p>You beat the KLORGBANE</p>{" "}
                <img className="max-h-80" src="./gifs/easyWin.webp" />
              </>
            )}
          </>
        )}
        {difficulty === "medium" && gameState == "lose" && (
          <>
            {theme === "memoryTime" ? (
              <>
                <p>You Killed the Princess Bubblegum</p>
              </>
            ) : (
              <>
                <p>You Killed Rigby</p>
                <img className="max-h-80" src="./gifs/easyLose.webp" />
              </>
            )}
          </>
        )}
        {difficulty === "hard" && gameState == "win" && (
          <>
            {theme === "memoryTime" ? (
              <>
                <p>You Beat the GOLB</p>
              </>
            ) : (
              <>
                <img className="max-h-80" src="./gifs/hardWin.gif" />
              </>
            )}
          </>
        )}
        {difficulty === "hard" && gameState == "lose" && (
          <>
            {theme === "memoryTime" ? (
              <>
                <p>You Killed the Finn</p>
              </>
            ) : (
              <>
                <img className="max-h-80" src="./gifs/hardLose.gif" />
              </>
            )}
          </>
        )}
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center ">
          <button
            onClick={() => {
              setShowPage("game");
              setScore(0);
            }}
            id="game"
            className={
              " rounded-lg py-3 px-8 text-3xl mt-8 " +
              (theme === "memoryTime" ? "bg-memoryTimeBlue" : "bg-blue-500")
            }
          >
            <VscDebugRestart />
          </button>
          <label
            htmlFor="game"
            className={theme === "memoryTime" ? "text-black" : ""}
          >
            Play Again
          </label>
        </div>
        <div className="flex flex-col ">
          <button
            onClick={() => {
              setShowPage("main");
              setScore(0);
            }}
            id="menu"
            className={
              " rounded-lg py-3 px-8 text-3xl mt-8 " +
              (theme === "memoryTime" ? "bg-memoryTimeBlue" : "bg-blue-500")
            }
          >
            <MdHome />
          </button>
          <label
            htmlFor="menu"
            className={theme === "memoryTime" ? "text-black" : ""}
          >
            Menu
          </label>
        </div>
      </div>
    </>
  );
};

export default EndGamePage;
