import React, { FunctionComponent } from "react";
import Style from "./styles.module.scss";
import clsx from "clsx";

export type Magnitude = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type XPos = "start" | "center" | "end";
export type YPos = "top" | "middle" | "bottom";
export type Spacing = "around" | "between";
export type Order = "first" | "last";

export interface BreakpointValues<T> {
  Xs?: T;
  Sm?: T;
  Md?: T;
  Lg?: T;
  Xl?: T;
}

export interface GridProps {
  size?: BreakpointValues<Magnitude>;
  offset?: BreakpointValues<Magnitude>;
  xPos?: BreakpointValues<XPos>;
  yPos?: BreakpointValues<YPos>;
  spacing?: BreakpointValues<Spacing>;
  order?: BreakpointValues<Order>;

  marginCenter?: boolean;
  container?: boolean;

  row?: boolean;
  reverse?: boolean;
  nowrap?: boolean;
}

const Grid: FunctionComponent<
  GridProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  size,
  offset,
  xPos,
  yPos,
  spacing,
  order,
  container = false,
  marginCenter = false,
  row = false,
  reverse = false,
  nowrap = false,
  className,
  children,
  ...props
}) => {
  let classes: string[] = [];

  if (size) {
    if (size.Xs) {
      classes.push(Style[`colXs${size.Xs}`]);
    }
    if (size.Sm) {
      classes.push(Style[`colSm${size.Sm}`]);
    }
    if (size.Md) {
      classes.push(Style[`colMd${size.Md}`]);
    }
    if (size.Lg) {
      classes.push(Style[`colLg${size.Lg}`]);
    }
    if (size.Xl) {
      classes.push(Style[`colXl${size.Xl}`]);
    }
  }

  if (offset) {
    if (offset.Xs) {
      classes.push(Style[`colXsOffset${offset.Xs}`]);
    }
    if (offset.Sm) {
      classes.push(Style[`colSmOffset${offset.Sm}`]);
    }
    if (offset.Md) {
      classes.push(Style[`colMdOffset${offset.Md}`]);
    }
    if (offset.Lg) {
      classes.push(Style[`colLgOffset${offset.Lg}`]);
    }
    if (offset.Xl) {
      classes.push(Style[`colXlOffset${offset.Xl}`]);
    }
  }

  if (xPos) {
    if (xPos.Xs) {
      classes.push(Style[`${xPos.Xs}Xs`]);
    }
    if (xPos.Sm) {
      classes.push(Style[`${xPos.Sm}Sm`]);
    }
    if (xPos.Md) {
      classes.push(Style[`${xPos.Md}Md`]);
    }
    if (xPos.Lg) {
      classes.push(Style[`${xPos.Lg}Lg`]);
    }
    if (xPos.Xl) {
      classes.push(Style[`${xPos.Xl}Xl`]);
    }
  }

  if (yPos) {
    if (yPos.Xs) {
      classes.push(Style[`${yPos.Xs}Xs`]);
    }
    if (yPos.Sm) {
      classes.push(Style[`${yPos.Sm}Sm`]);
    }
    if (yPos.Md) {
      classes.push(Style[`${yPos.Md}Md`]);
    }
    if (yPos.Lg) {
      classes.push(Style[`${yPos.Lg}Lg`]);
    }
    if (yPos.Xl) {
      classes.push(Style[`${yPos.Xl}Xl`]);
    }
  }

  if (spacing) {
    if (spacing.Xs) {
      classes.push(Style[`${spacing.Xs}Xs`]);
    }
    if (spacing.Sm) {
      classes.push(Style[`${spacing.Sm}Sm`]);
    }
    if (spacing.Md) {
      classes.push(Style[`${spacing.Md}Md`]);
    }
    if (spacing.Lg) {
      classes.push(Style[`${spacing.Lg}Lg`]);
    }
    if (spacing.Xl) {
      classes.push(Style[`${spacing.Xl}Xl`]);
    }
  }

  if (order) {
    if (order.Xs) {
      classes.push(Style[`${order.Xs}Xs`]);
    }
    if (order.Sm) {
      classes.push(Style[`${order.Sm}Sm`]);
    }
    if (order.Md) {
      classes.push(Style[`${order.Md}Md`]);
    }
    if (order.Lg) {
      classes.push(Style[`${order.Lg}Lg`]);
    }
    if (order.Xl) {
      classes.push(Style[`${order.Xl}Xl`]);
    }
  }

  return (
    <div
      className={clsx(classes, className, {
        [Style.container]: container,
        [Style.marginCenter]: marginCenter,
        [Style.nowrap]: nowrap,
        [Style.reverse]: reverse,
        [Style.marginCenter]: marginCenter,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
