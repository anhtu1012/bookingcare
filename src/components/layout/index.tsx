import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import Carousel from "../carousel";

function Layout() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />

      <div style={{ marginTop: "10px", padding: "0px 40px" }}>
        <Carousel />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
