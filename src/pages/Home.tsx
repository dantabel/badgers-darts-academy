import badger from "../assets/Gemini_Generated_Image_o2m631o2m631o2m6.png";

const Home = () => (
  <div className="Home lg:absolute top-0 w-full -z-10">
    <div className="bg-black">
      <img className="ml-auto w-full" src={badger} />
    </div>
    <div className="py-4 bg-white">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 items-center place-items-center">
        <a href="https://www.facebook.com/pontyclunrugbyclub/" target="_blank">
          <img className="rounded-xl" src="/pontyclun-rfc.jpeg" />
        </a>
        <a href="https://www.juniordarts.com/" target="_blank">
          <img className="rounded-xl" src="/jdc.png" />
        </a>
        <a href="https://www.reddragondarts.com/" target="_blank">
          <img className="rounded-lg" src="/red-dragon.jpeg" />
        </a>
        <a href="https://winmau.com/" target="_blank">
          <img className="rounded-xl" src="/winmau.png" />
        </a>
      </div>
    </div>
  </div>
);

export default Home;
