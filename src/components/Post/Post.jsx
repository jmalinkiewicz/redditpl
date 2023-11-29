import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO: include number of upvotes and downvotes

function Post() {
  const src =
    "https://preview.redd.it/pis-rozpoczyna-walk%C4%99-z-lud%C5%BAmi-kt%C3%B3rzy-prostuj%C4%85-ich-v0-zvjafc7q3i0c1.png?width=584&format=png&auto=webp&s=46897b33e105b4f2bc320c4ce47a69b387836dc6";

  return (
    <div className="m-auto w-11/12 md:w-3/5 lg:w-3/6 xl:w-2/5 shadow-xl p-8">
      <div className="flex">
        <div className="flex flex-col mt-6 mr-6">
          <FontAwesomeIcon icon={faArrowUp} style={{ color: "#000000" }} />
          150
          <FontAwesomeIcon icon={faArrowDown} style={{ color: "#000000" }} />
        </div>
        <div>
          <h1 className="text-xl font-bold">
            Beata szydło ostro na twitterze!
          </h1>
          <p>
            beata muszydło napisała tweet, a korwin odpowiedział. To wywołało
            dyskusję w mediach społecznościowych. Ich wymiana zdań była
            intensywnie komentowana przez użytkowników internetu. Temat stał się
            viralowy i szybko rozprzestrzenił się w sieci.
          </p>
        </div>
      </div>
      <div
        className="w-full overflow-hidden relative mt-8"
        style={{ height: 550 }}
      >
        <img
          className="w-full h-full object-cover blur-lg scale-125"
          src={src}
          alt="Roblox"
        />
        <figure className="absolute top-0 bottom-0 left-0 right-0 ">
          <img
            className="w-full h-full object-contain"
            src={src}
            alt="Roblox"
          />
        </figure>
      </div>
    </div>
  );
}

export default Post;
