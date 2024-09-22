import { useEffect, useState } from "react";
import Loader from "./Loader";

const PageSelection = ({ setPage }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = () => reject(new Error(`Failed to load image at ${src}`));
      });
    };

    const imageSources = [
      process.env.PUBLIC_URL + "src/assets/memoryTimeCrew.png",
      process.env.PUBLIC_URL + "src/assets/memoryShowCrew.png",
      process.env.PUBLIC_URL + "src/assets/memoryTimeLogo.png",
    ];

    const imagePromises = imageSources.map(loadImage);

    Promise.all(imagePromises)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full h-full">
      {loading && <Loader />}
      <div className="fixed top-0 -z-10 w-full min-h-screen">
        <div className="relative min-h-screen w-full bg-neutral-900">
          <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        </div>
      </div>
      {!loading && (
        <div className="text-white pt-10 pb-10">
          <div className="font-memoryTimeText text-4xl lg:text-5xl text-center ">
            <span className="text-[#ebe9eb] select-none">Pick a Theme</span>
          </div>
          <div className="w-full flex justify-center pt-10 lg:pt-0">
            <div className="container flex flex-col lg:flex lg:flex-row lg:justify-center gap-10 ">
              <div className="flex flex-col justify-center lg:grid lg:grid-rows-2">
                <span className="font-memoryShowText  memory-show-logo select-none text-center  place-self-center lg:place-self-auto lg:place-content-end lg:justify-self-center pb-6 ">
                  <span
                    onClick={() => {
                      setPage("memoryShow");
                      console.log("page: Memory Show");
                    }}
                    className="cursor-pointer lg:h-[140px] lg:flex lg:justify-center lg:items-center text-5xl lg:text-6xl"
                  >
                    MEMORY SHOW
                  </span>
                </span>
                <div
                  onClick={() => {
                    setPage("memoryShow");
                    console.log("page: Memory Show");
                  }}
                  className="cursor-pointer w-[300px] sm:w-[400px] lg:w-[480px] place-self-center"
                >
                  <img
                    src="src/assets/memoryShowCrew.png"
                    className="rounded-[10px]"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center lg:grid lg:grid-rows-2">
                <span className="place-self-center lg:place-self-auto lg:place-content-end lg:justify-self-center  pb-6 ">
                  <img
                    src="src/assets/memoryTimeLogojake.png"
                    onClick={() => {
                      setPage("memoryTime");
                      console.log("page: Memory Time");
                    }}
                    className="cursor-pointer select-none w-[250px] lg:w-[350px]"
                    alt=""
                  />
                </span>

                <div
                  onClick={() => {
                    setPage("memoryTime");
                    console.log("page: Memory Time");
                  }}
                  className="w-[300px] sm:w-[400px] lg:w-[480px] place-self-center "
                >
                  <img
                    className="cursor-pointer rounded-[10px] "
                    src="src/assets/memoryTimeCrew.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageSelection;
