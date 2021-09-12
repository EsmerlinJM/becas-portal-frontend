import React, { useState } from "react";
import Header2 from "../UI/organisms/header-2";
import HeaderUser from "../UI/organisms/header-user";
import Navigation from "../UI/molecules/navigation";
import SidebarFilter from "../UI/organisms/sidebar-filter";
// import AlertTop from "../UI/molecules/alert-top";
import InputSearch from "../UI/atoms/input-search";
import Footer from "../UI/organisms/footer";
import { useSelector } from "react-redux";
import { getAuth } from "../../utils/auth";
import { FiSliders } from "react-icons/fi";
import { Drawer } from "@material-ui/core";

export default function LayoutResult({ children }) {
  const { data, status } = useSelector((state) => state.user.one);
  const { token } = getAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fadeIn">
      {/* <AlertTop /> */}
      {token && status === "completed" && Object.keys(data).length ? (
        <HeaderUser user={data} />
      ) : (
        <Header2 />
      )}
      {/* <Header2 /> */}
      <Navigation />

      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <SidebarFilter />
      </Drawer>

      <div className="flex">
        <div
          className="shadow-lg z-10	rounded hidden md:inline-block"
          style={{ width: "270px", minWidth: "270px" }}
        >
          <SidebarFilter />
        </div>

        <div className="p-8 bg-gray-50 w-full z-0">
          <InputSearch />
          {children}
        </div>

        <div className="fixed bottom-6 right-6 md:hidden">
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            class="p-0 h-14 w-14 bg-blue-800 rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          >
            <FiSliders className="inline-block text-white" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
