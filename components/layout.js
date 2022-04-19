import Nav from "../components/navigation";
import React, { useState, useRef } from "react";

const Layout = ({ children }) => {
  const [navColor, setNavColor] = useState(undefined);
  const backgroundRef = useRef();

  return (
    <div>
      <Nav navColor={navColor} />
      {React.cloneElement(children, {
        setNavColor,
        navColor,
      })}
    </div>
  );
};

export default Layout;
