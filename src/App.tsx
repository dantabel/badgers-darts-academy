import badgers from "./assets/badgers.png";
import "./App.css";
import { Link, Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { ChevronRight, MenuIcon, MenuSquareIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";
import About from "./pages/About"
import Sponsors from "./pages/Sponsors"

function App() {
  const { pathname } = useLocation();
  const [pageClass, setPageClass] = useState<string>();

  useEffect(() => {
    setPageClass(
      pathname === "/" ? "home" : pathname.replaceAll("/", " ").trim()
    );
  }, [pathname]);

  const links = [
    {
      title: "Home",
      to: "/",
      component: <Home />,
    },
    {
      title: "Registration Form",
      to: "/register",
      component: <Register />,
    },
    {
      title: "About the Academy",
      to: "/about",
      component: <About />,
    },
    // {
    //   title: "Sponsors",
    //   to: "/sponsors",
    //   component: <Sponsors />,
    // },
    // {
    //   title: "Meet the Team",
    //   to: "/the-team",
    // },
  ];

  return (
    <div className={`App ${pageClass}`}>
      <header className="block z-10">
        <div className="bg-black lg:bg-transparent pt-4 lg:py-4 px-6 flex flex-row w-full">
          <Sheet>
            <SheetTrigger asChild>
              {/* <SquareMenuIcon className="size-20 text-white opacity-50 self-center" /> */}
              <MenuSquareIcon className="size-18 text-white opacity-50 self-center border-white rounded-md mr-0 md:mr-5" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                {/* <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription> */}
              </SheetHeader>

              <div className="no-scrollbar overflow-y-auto px-4">
                <ul className="list-none border-t-1 border-gray">
                  {links.map((link) => (
                    <li key={link.to} className="border-b-1 border-gray">
                      <SheetClose asChild>
                        <Link to={link.to}  className={"block p-4 hover:bg-white/10" + (link.to===pathname ? ' bg-white/15' : '')}>
                          {link.title} <ChevronRight className="float-end opacity-50" />
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </div>

              <SheetFooter>
                {/* <Button type="submit">Save changes</Button>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose> */}
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <div>
            <a href="/">
              <img className="max-h-35" src={badgers} />
            </a>
          </div>   
          
          <div className="ml-4 mt-3 sm:mt-4 text-white text-shadow-lg">
            <h1 className="text-3xl md:text-5xl">
              <strong>Pontyclun Badgers</strong>
            </h1>
            <h2 className="text-2xl md:text-4xl">
              <em>junior darts academy</em>
            </h2>
          </div>

          {/* <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu> */}
        </div>
      </header>

      <main className="text-white clear-both block -z-10">
        <Routes>
          {links.map((link) => <Route path={link.to} element={link.component} />)}
        </Routes>
      </main>

      <footer className="text-white text-center m-4">
        &copy;2026 Pontyclun Badgers Junior Darts Academy
      </footer>
    </div>
  );
}

export default App;
