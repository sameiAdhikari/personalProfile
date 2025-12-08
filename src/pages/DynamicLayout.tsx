import { Outlet } from "react-router-dom";
import DynamicPageHeader from "../components/DynamicPageHeader";
import Footer from "../components/Footer";

function DynamicLayout() {
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
