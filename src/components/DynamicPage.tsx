import { useNavigate, useParams } from "react-router-dom";
import { listOfExperience } from "../data/data";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";

function DynamicPage() {
  const params = useParams();
  const navigate = useNavigate();
  const user = listOfExperience.filter((el) => el.id === params.id)[0];
  const listOfImage = ["/a.jpg", "/b.jpeg", "/c.jpeg", "/d.jpeg"];
  const [fullScreenImage, setFullScreenImage] = useState<string>();
  const [isFullscreenActive, setIsFullscreenActive] = useState(false);
  const [isZoomin, setIsZoomin] = useState<number | null>(null);
  const requestFullScreen = (imagePath: string) => {
    setFullScreenImage(imagePath);
    setIsFullscreenActive(true);
    window.document.body.style.overflow = "hidden";
  };
  const removeFullscreen = () => {
    setFullScreenImage(undefined);
    setIsFullscreenActive(false);
    window.document.body.style.overflow = "auto";
  };
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    const loadingType = window.performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    if (loadingType?.type === "reload") {
      window.scrollTo(0, 0);
    }
  }, []);

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
      <h1 className="text-5xl font-semibold ml-10 mb-10">{user?.title}</h1>
      <div className="flex justify-center gap-8 px-5">
        <img
          src={user?.imagePath}
          alt={user?.title}
          className="w-170 h-150 rounded-2xl object-cover cursor-zoom-in"
          onClick={() => requestFullScreen(user?.imagePath)}
        />
        <div className="grid grid-cols-[20rem_20rem] grid-rows-[18rem_18rem] gap-7">
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
      <div className="flex items-center justify-between my-20 px-25 py-10 bg-white rounded-2xl">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl">Client :</p>
          <h3 className="text-3xl font-semibold">{user?.client}</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl">Location :</p>
          <h3 className="text-3xl font-semibold">{user?.location}</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl">Category :</p>
          <h3 className="text-3xl font-semibold">{user?.category}</h3>
        </div>
      </div>
      <article className="flex flex-col gap-10">
        <div>
          <h1 className="text-3xl font-semibold font-serif mb-2">
            01. The Challenge
          </h1>
          <p className="text-muted text-xl text-justify">
            {" "}
            When our power of choice is untrammelled and when nothing prevents
            our being able to do what we like best, every pleasure is to be
            welcomed and every pain avoided. But in certain circumstances and
            owing to the claims of duty or the obligations of business it will
            frequently occur that pleasures have to be repudiated and annoyances
            accepted. The wise man therefore always holds in these matters to
            this principle of selection: he rejects pleasures to secure other
            greater pleasures, or else he endures pains to avoid worse pains."
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold font-serif mb-2">
            02. The Solution
          </h1>
          <p className="text-muted text-xl text-justify">
            {" "}
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores repellat.
            <ul className="list-disc text-md ml-13 my-3">
              <li>
                One who avoids a pain that produces no resultant pleasure.
              </li>
              <li>Laboruous physical exercise.</li>
              <li>One who avoids a pain that produces no resultant</li>
              <li>which of us ecer undertakes laborious</li>
              <li>Avoids pleasure itseltf, because it is.</li>
            </ul>
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold font-serif mb-2">
            03. The Result
          </h1>
          <p className="text-muted text-xl text-justify">
            {" "}
            Because it is pain, but because occasionally circumstances occur in
            which toil and pain can procure him some great pleasure. To take a
            trivial example, which of us ever undertakes laborious physical
            exercise, except to obtain some advantage from it? But who has any
            right to find fault with a man who chooses to enjoy a pleasure that
            has no annoying consequences, or one who avoids a pain that produces
            no resultant pleasure?" <br />
            <br /> But I must explain to you how all this mistaken idea of
            denouncing pleasure and praising pain was born and I will give you a
            complete account of the system, and expound the actual teachings of
            the great explorer of the truth, the master-builder of human
            happiness. No one rejects, dislikes, or avoids pleasure itself,
            because it is pleasure, but because those who do not know how to
            pursue pleasure rationally encounter consequences that are extremely
            painful. Nor again is there anyone who loves or pursues or desires
            to obtain pain of itself.
          </p>
        </div>
      </article>
      <div className="mt-10">
        <h1 className="text-4xl font-semibold mb-5">Related Work</h1>
        <div className="flex items-center justify-center gap-10 cursor-pointer">
          {listOfExperience?.slice(0, 3).map((list, i) => (
            <div key={list.id} className="flex items-start flex-col gap-1 ">
              <div
                className="w-110 h-100 overflow-hidden rounded-2xl"
                onMouseEnter={() => setIsZoomin(i)}
                onMouseLeave={() => setIsZoomin(null)}
                onClick={() => {
                  navigate(`/work/${list?.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src={list?.imagePath}
                  alt={list?.title}
                  className="w-full h-full object-cover  transition-all duration-300"
                  style={{
                    scale: isZoomin === i ? "105%" : "",
                  }}
                />
              </div>
              <p className="text-[15px] mt-10 text-muted capitalize">
                {list?.category}
              </p>
              <h2 className="text-3xl font-semibold capitalize">
                {list?.title}
              </h2>
              <button className=" flex gap-2 font-medium text-[18px] items-center justify-center">
                view Project{" "}
                <span
                  className={`flex transition-transform ${
                    isZoomin === i ? "-skew-y-30!" : ""
                  }  `}
                >
                  <FaArrowRightLong className="text-3xl" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DynamicPage;
