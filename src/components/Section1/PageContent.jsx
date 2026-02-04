import React from "react";
import Sidebar from "../Sidebar";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const PageContent = () => {
  return (
    <div className="dashboard-layout">

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="main-content">
        <LeftContent />
        <RightContent />
      </div>

    </div>
  );
};

export default PageContent;
