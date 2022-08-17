import {React, useContext} from "react";
import "./topbar.scss";
import { Settings } from "@material-ui/icons";
import { logout } from "../../context/ContextAuth/AuthActions";
import { ContextAuth } from "../../context/ContextAuth/ContextAuth";

export default function Topbar() {
  const { dispatch } = useContext(ContextAuth);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <img
            className="logo"
            src="assets/logo.png"
            alt=""
          />
        </div>
        <div className="topRight">
        
          <div className="profile-options topbarIconContainer">
            <Settings className="icons" />
            <div className="optioncls">
              <span>Profile</span>
              <span onClick={
                () => dispatch(logout())
              }
              >Logout</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
