import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen h-screen w-[100%] grid grid-rows-[5rem_1fr_auto] ">
      <Header />
      <section className=" p-6 w-full max-w-[1400px] mx-auto">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default Layout;
