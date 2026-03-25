import clsx from "clsx";
import React from "react";
import "./chart-bar.css";

export type ChartBarProps = {
  /**
   * The label displayed below the bar.
   */
  label: string;
  /**
   * The height of the bar in pixels.
   */
  height?: number;
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

/**
 * A single bar chart column with a colored bar and a text label.
 */
export function ChartBar({
  className,
  label,
  height = 160,
  ...props
}: ChartBarProps) {
  const classNames = clsx(className, "chart-bar");
  return (
    <div className={classNames} {...props}>
      <div
        className="chart-bar-fill"
        style={{ height: `${height}px` }}
      />
      <span className="chart-bar-label">{label}</span>
    </div>
  );
}
