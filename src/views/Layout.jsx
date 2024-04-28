import { Link, Outlet } from "react-router-dom"
import SiteNavigation from "../components/SiteNavigation.jsx";
import {useEffect} from "react";
import {useUserContext} from "../contexts/UserContext.jsx";

const Layout = () => {
  const {handleAutoLogin} = useUserContext();
  useEffect(() => {
      handleAutoLogin();
  }, []);


  return(
    <div>
        <header>
          <SiteNavigation/>
        </header>
        <main>
            <Outlet />
        </main>
        <footer className="m-12 text-xl">
            Copyright 2024
        </footer>
    </div>
)};

export default Layout
