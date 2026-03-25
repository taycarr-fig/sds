import clsx from "clsx";
import { Flex } from "layout";
import { TextHeading } from "primitives";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import "./dashboard.css";

export type ChartCardProps = {
  /**
   * The title displayed above the chart content.
   */
  title: string;
  /**
   * The chart visualization content.
   */
  children?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

/**
 * A bordered container for data visualizations with a title and content slot.
 */
export function ChartCard({
  children,
  className,
  title,
  ...props
}: ChartCardProps) {
  const classNames = clsx(className, "chart-card");
  return (
    <div className={classNames} {...props}>
      <TextHeading>{title}</TextHeading>
      <div className="chart-card-content">{children}</div>
    </div>
  );
}

export type DataTableProps = {
  /**
   * The title displayed above the table.
   */
  title: string;
  /**
   * Table row content (header + data rows).
   */
  children?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

/**
 * A structured table container with a title and rows.
 */
export function DataTable({
  children,
  className,
  title,
  ...props
}: DataTableProps) {
  const classNames = clsx(className, "data-table");
  return (
    <div className={classNames} {...props}>
      <div className="data-table-title">
        <TextHeading>{title}</TextHeading>
      </div>
      {children}
    </div>
  );
}

export type DataTableRowProps = {
  /**
   * Whether this is a header or data row.
   */
  type?: "header" | "data";
  /**
   * Column values to display.
   */
  columns: string[];
} & ComponentPropsWithoutRef<"div">;

/**
 * A table row with fixed-width columns.
 */
export function DataTableRow({
  className,
  columns,
  type = "data",
  ...props
}: DataTableRowProps) {
  const classNames = clsx(
    className,
    "data-table-row",
    `data-table-row-${type}`,
  );
  return (
    <div className={classNames} {...props}>
      {columns.map((col, i) => (
        <div key={i} className="data-table-cell">
          {col}
        </div>
      ))}
    </div>
  );
}
