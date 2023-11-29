import {observer} from "mobx-react-lite";
import {Outlet} from "react-router-dom";
import {Appbar} from "../components/app-bar";

import "./layout.css";

export const Layout = observer(() => {
  
  return (
    <div className="layout">
      <Appbar />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxHeight: "100%",
          height: "100%",
          overflow: "auto",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
});
