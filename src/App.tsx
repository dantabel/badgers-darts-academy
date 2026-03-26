import badgers from "./assets/badgers.png";
import badger from "./assets/Gemini_Generated_Image_o2m631o2m631o2m6.png";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
import "./App.css";

function App() {
  return (
    <div className="bg-black">
      <div className="bg-black lg:bg-transparent pt-4 lg:py-4 px-6 lg:absolute flex flex-row">
        <img className="h-40" src={badgers} />
        <h1 className="ml-4 mt-3 sm:mt-4 text-3xl md:text-5xl text-white text-shadow-lg">
          <strong>Pontyclun Badgers</strong>
          <br />
          <small>
            <em>junior darts academy</em>
          </small>
        </h1>
      </div>

      <div className="bg-black">
        <img className="ml-auto w-full" src={badger} />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 items-center place-items-center m-6">
        <a href="https://www.facebook.com/pontyclunrugbyclub/" target="_blank"><img className="rounded-xl" src="/pontyclun-rfc.jpeg" /></a>
        <a href="https://www.juniordarts.com/" target="_blank"><img className="rounded-xl" src="/jdc.png" /></a>
        <a href="https://www.reddragondarts.com/" target="_blank"><img className="" src="/red-dragon.jpeg" /></a>
        <a href="https://winmau.com/" target="_blank"><img className="rounded-xl" src="/winmau.png" /></a>
      </div>
      <footer className="text-white text-center m-4">
        &copy;2026 Pontyclun Badgers Junior Darts Academy 
      </footer>
    </div>
  );
}

export default App;
