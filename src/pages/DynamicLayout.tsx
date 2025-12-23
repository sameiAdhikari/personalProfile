import { Outlet } from "react-router-dom";
import DynamicPageHeader from "../components/DynamicPageHeader";
import Footer from "../components/Footer";
import { useEffect } from "react";

function DynamicLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DynamicPageHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DynamicLayout;
