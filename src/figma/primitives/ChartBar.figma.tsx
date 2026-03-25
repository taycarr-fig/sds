import figma from "@figma/code-connect";
import { ChartBar } from "primitives";

figma.connect(ChartBar, "<FIGMA_DASHBOARD_CHART_BAR>", {
  props: {
    label: figma.string("Label"),
  },
  example: ({ label }) => <ChartBar label={label} height={160} />,
});
