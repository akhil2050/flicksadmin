import "./WidgetSide.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSide() {

  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("https://flickstv.herokuapp.com/api/users", {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).split(" ")[1] , 
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);

      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="WidgetSide">
      <span className="WidgetSideTitle">Our Members</span>
      <ul className="WidgetSideList">

        {newUsers.map((user) => (
          <li className="WidgetSideListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="WidgetSideImg"
            />
            <div className="WidgetSideUser">
              <span className="WidgetSideUsername">{user.username}</span>
            </div>
            <button className="WidgetSideButton">
              <Visibility className="WidgetSideIcon" />
              Display
            </button>
          </li>
        ))}
        {/* <li className="WidgetSideListItem">
          <img
            src=
            "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"

            alt=""
            className="WidgetSideImg"
          />
          <div className="WidgetSideUser">
            <span className="WidgetSideUsername">Sijo</span>
          </div>
          <button className="WidgetSideButton">

            View
          </button>
        </li>
        <li className="WidgetSideListItem">
          <img
            src=
            "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"

            alt=""
            className="WidgetSideImg"
          />
          <div className="WidgetSideUser">
            <span className="WidgetSideUsername">Akhil</span>
          </div>
          <button className="WidgetSideButton">

            View
          </button>
        </li> */}

      </ul>
    </div>
  );
}
