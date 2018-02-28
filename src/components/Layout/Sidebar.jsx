import React from "react";
import styles from "./styles.css";
import Console from "./Console";
import NotableSightings from "../NotableSightings";

const Sidebar = props => {
  return (
    <div className="Sidebar">
      <Console />
      <NotableSightings />
    </div>
  );
};

export default Sidebar;