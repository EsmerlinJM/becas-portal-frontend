import React from "react";
import Header2 from "../UI/organisms/header-2";
import Navigation from "../UI/molecules/navigation";
import SidebarFilter from "../UI/organisms/sidebar-filter";
import AlertTop from "../UI/molecules/alert-top";

export default function LayoutResult({ children }) {
  return (
    <div>
      <AlertTop />
      <Header2 />
      <Navigation />
      <div className="flex">
        <SidebarFilter />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
