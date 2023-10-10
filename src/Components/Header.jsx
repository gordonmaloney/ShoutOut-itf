import React from "react";
import LogoText from "../Images/LogoText.png";
import LogoNoText from "../Images/LogoNoText.png";
import { useWindowSize } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

export const Header = () => {
  const { width } = useWindowSize();

  return (
    <div className="header">
      <Link to="../" style={{textDecoration: 'none', color: 'inherit'}}>
        <h2 style={{ marginLeft: "20px" }}>ShoutOut</h2>
      </Link>
      {width > 599 && <img className="logo" height="50px" src={LogoText} />}
      {width < 600 && <img className="logo" height="50px" src={LogoNoText} />}
    </div>
  );
};
