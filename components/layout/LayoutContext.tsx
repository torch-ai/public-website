import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export interface IThemeContext {
  navColor: "black" | "white";
  setNavColor: Dispatch<SetStateAction<IThemeContext["navColor"]>>;
}

const LayoutContext = React.createContext<IThemeContext>({} as IThemeContext);
LayoutContext.displayName = "LayoutContext";

export default LayoutContext;

interface Props {}
export const LayoutContextProvider: React.FunctionComponent<
  PropsWithChildren<Props>
> = ({ children }) => {
  const [navColor, setNavColor] = useState<IThemeContext["navColor"]>("white");

  return (
    <LayoutContext.Provider
      value={{
        navColor,
        setNavColor,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
