import badgers from "./assets/badgers.png";
import badger from "./assets/Gemini_Generated_Image_o2m631o2m631o2m6.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import "./App.css";

function App() {
  return (
    <div>
      <header className="bg-black">
        <div className="container px-4 mx-auto flex items-center gap-x-4 p-6">
          <a href="/">
            <img
              className="size-40 shrink-0"
              src={badgers}
              alt="Badgers Darts Academy logo"
            />
          </a>
          <div>
            <div className="text-2xl font-medium text-white">
              Pontyclun Badgers
              Junior Darts Academy
            </div>
            {/* <p className="text-gray-500 dark:text-gray-400">
              You have a new message!
            </p> */}
          </div>
          {/* <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink>Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu> */}
        </div>

      </header>
      <div className="bg-black">
        <img className="ml-auto" src={badger} />
      </div>
    </div>
  );
}

export default App;
