import Nav from "../Navigation/Navigation";
import React from "react";

interface Props {}
const Layout: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
