import figma from "@figma/code-connect";
import { ChartCard, DataTable } from "compositions";

figma.connect(ChartCard, "<FIGMA_DASHBOARD_CHART_CARD>", {
  props: {
    title: figma.string("Title"),
    children: figma.children("Content"),
  },
  example: ({ title, children }) => (
    <ChartCard title={title}>{children}</ChartCard>
  ),
});

figma.connect(DataTable, "<FIGMA_DASHBOARD_DATA_TABLE>", {
  props: {
    title: figma.string("Title"),
    children: figma.children(["Header Row", "Data Row 1", "Data Row 2", "Data Row 3"]),
  },
  example: ({ title, children }) => (
    <DataTable title={title}>{children}</DataTable>
  ),
});
