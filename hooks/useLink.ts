import React, { useEffect } from "react";

const useLink = (
  props: React.DetailedHTMLProps<
    React.LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  >
) => {
  useEffect(() => {
    const link = document.createElement("link");

    Object.entries(props).forEach(([key, value]) => {
      if (typeof key === "string") {
        link[key] = value;
      }
    });

    document.body.appendChild(link);
    return () => {
      document.body.removeChild(link);
    };
  }, [props]);
};

export default useLink;
