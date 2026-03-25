import clsx from "clsx";
import React from "react";
import "./status-badge.css";

type StatusBadgeScheme = "positive" | "brand" | "warning";

export type StatusBadgeProps = {
  /**
   * The color scheme of the badge.
   */
  scheme?: StatusBadgeScheme;
} & React.ComponentPropsWithoutRef<"span">;

/**
 * A compact pill-shaped indicator for displaying entity status.
 * Uses semantic color schemes to communicate state at a glance.
 */
export function StatusBadge({
  children,
  className,
  scheme = "positive",
  ...props
}: StatusBadgeProps) {
  const classNames = clsx(
    className,
    "status-badge",
    `status-badge-scheme-${scheme}`,
  );
  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  );
}
