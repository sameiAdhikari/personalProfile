import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <>
      <Header />
      <main className=" max-w-screen min-h-screen text-primary ">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default Layout;
