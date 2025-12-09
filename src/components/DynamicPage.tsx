import { useParams } from "react-router-dom";
import { listOfExperience } from "../data/data";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function DynamicPage() {
  const params = useParams();
  const user = listOfExperience.filter((el) => el.id === params.id)[0];
  const listOfImage = ["/a.jpg", "/b.jpeg", "/c.jpeg", "/d.jpeg"];
  const [fullScreenImage, setFullScreenImage] = useState<string>();
  const [isFullscreenActive, setIsFullscreenActive] = useState(false);
  const requestFullScreen = (imagePath: string) => {
    setFullScreenImage(imagePath);
    setIsFullscreenActive(true);
  };
  const removeFullscreen = () => {
    setFullScreenImage(undefined);
    setIsFullscreenActive(false);
  };

  return (
    <div className="p-10">
      {isFullscreenActive && (
        <div className="fixed inset-0 bg-black/80 z-49 grid place-items-center">
          <img
            src={fullScreenImage}
            alt=""
            className="max-h-[90dvh] max-w-90vw object-cover"
          />
          <RxCross2
            className="text-5xl fixed top-10 right-10 text-white cursor-pointer"
            onClick={removeFullscreen}
          />
        </div>
      )}
      <h1 className="text-5xl font-semibold mb-5">{user.title}</h1>
      <div className="flex gap-8 px-5">
        <img
          src={user.imagePath}
          alt={user.title}
          className="w-150 h-136 rounded-2xl object-cover cursor-zoom-in"
          onClick={() => requestFullScreen(user.imagePath)}
        />
        <div className="grid grid-cols-[18rem_18rem] grid-rows-[16rem_16rem] gap-8">
          {listOfImage.map((src) => (
            <img
              src={src}
              alt="ramdom image"
              key={src}
              onClick={() => requestFullScreen(src)}
              className=" w-full h-full rounded-2xl  object-cover cursor-zoom-in"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DynamicPage;
