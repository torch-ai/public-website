import React, { useEffect } from "react";

const useScript = (
  props: React.DetailedHTMLProps<
    React.ScriptHTMLAttributes<HTMLScriptElement>,
    HTMLScriptElement
  >
) => {
  useEffect(() => {
    const script = document.createElement("script");

    Object.entries(props).forEach(([key, value]) => {
      console.info(key, value);
      if (typeof key === "string") {
        script[key] = value;
      }
    });
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [props]);
};

export default useScript;
