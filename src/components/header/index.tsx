import { Drawer } from "antd";
import { useState } from "react";
import { ImStopwatch } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { PiHandHeartBold } from "react-icons/pi";
import "./index.scss";

function Header() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tất Cả");
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="header">
      <div className="header__left">
        <div>
          <LuMenu style={{ color: "gray" }} size={30} onClick={showDrawer} />
          <Drawer
            placement={"left"}
            title="Basic Drawer"
            onClose={onClose}
            open={open}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>
        <div>
          <img
            src="https://img.vn.my-best.com/product_images/ef33fc54534d4ca7444b21d7ea4b748c.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=40b7637b014b5367b57287187a4db72f"
            alt=""
            width={200}
          />
        </div>
      </div>
      <div className="header__navbar">
        <ul className="navigation">
          {["Tất Cả", "Tại Nhà", "Tại Viện", "Sống Khỏe"].map((tab) => (
            <li
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => handleClick(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="search">
          <IoIosSearch />
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
      </div>
      <div className="header__right">
        <div className="icon">
          <PiHandHeartBold size={30} />
          <span>Hợp tác</span>
        </div>
        <div className="icon">
          <ImStopwatch size={30} />
          <span>Lịch hẹn</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
