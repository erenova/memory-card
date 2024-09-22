import { useEffect, useState } from "react";
import Loader from "./Loader";
import { FaExchangeAlt } from "react-icons/fa";
import { MdMusicOff, MdQuestionMark } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";
import Scoreboard from "./Scoreboard";

const PageMemoryTime = ({ setPage }) => {
  const [loading, setLoading] = useState(true);

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
          <div className="fixed top-0 w-full min-h-full -z-20 sm:bg-memoryTime bg-memoryTimeMobile bg-cover select-none pointer-events-none"></div>
          <div className="w-full h-full text-center pt-8 flex  items-center flex-col text-white text-3xl">
            <div className="container flex flex-col justify-center items-center">
              <div className="pb-6 text-white font-memoryTimeScore">
                <div className=" select-none">
                  <img
                    className="w-[300px] lg:w-[400px]"
                    src="src/assets/memoryTimeLogoInGame.png"
                    alt=""
                  />
                </div>
                <div className="lg:absolute lg:left-16 xl:left-40 lg:top-32 text-4xl lg:text-6xl text-black">
                  <Scoreboard currentScore="4" highScore="15" />
                </div>
              </div>
              <button className="bg-memoryTimeBlue fixed bottom-52 lg:bottom-60 rounded-md font-memoryTimeText w-60 text-4xl lg:text-5xl p-2">
                <span className="drop-shadow-lg">start</span>
              </button>
              <div className="pt-8 flex gap-4 lg:gap-8 fixed bottom-32 lg:bottom-20 lg:right-20">
                <button className=" bg-white rounded-md text-4xl lg:text-5xl p-2 ">
                  <span className="drop-shadow-lg text-[#8e8ce4]">
                    <MdMusicOff />
                  </span>
                </button>
                <button className=" bg-white rounded-md  text-4xl lg:text-5xl p-2">
                  <span className="drop-shadow-lg text-[#8e8ce4]">
                    <MdQuestionMark />
                  </span>
                </button>
                <button
                  onClick={() => {
                    setPage("memoryShow");
                  }}
                  className="bg-white rounded-md  text-4xl lg:text-5xl p-2"
                >
                  <span className="drop-shadow-lg text-[#8e8ce4]">
                    <FaExchangeAlt />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PageMemoryTime;
