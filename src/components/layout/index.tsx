import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

function Layout() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <div style={{ marginTop: "80px", position: "relative" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
