import badgers from "./assets/badgers.png";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register"
import { useEffect, useState } from "react"

function App() {
  const { pathname } = useLocation();
  const [pageClass, setPageClass] = useState<string>()
  useEffect(() => {
    setPageClass(pathname === '/' ? 'home' : pathname.replaceAll('/', ' ').trim())
  }, [pathname])
  return (
    <div className={`App ${pageClass}`}>
      <header className="block z-10">
        <div className="bg-black lg:bg-transparent pt-4 lg:py-4 px-6 flex flex-row w-full">
          <a href='/'><img className="h-35" src={badgers} /></a>
          <div className="ml-4 mt-3 sm:mt-4 text-white text-shadow-lg">
            <h1 className="text-3xl md:text-5xl">
              <strong>Pontyclun Badgers</strong>
            </h1>
            <h2 className="text-2xl md:text-4xl">
              <em>junior darts academy</em>
            </h2>
          </div>
        </div>
      </header>

      <main className="text-white clear-both block -z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </main>

      <footer className="text-white text-center m-4">
        &copy;2026 Pontyclun Badgers Junior Darts Academy
      </footer>
    </div>
  );
}

export default App;
