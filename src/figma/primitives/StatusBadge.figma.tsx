import figma from "@figma/code-connect";
import { StatusBadge } from "primitives";

figma.connect(StatusBadge, "<FIGMA_DASHBOARD_STATUS_BADGE>", {
  props: {
    label: figma.string("Label"),
    scheme: figma.enum("Scheme", {
      Brand: "brand",
      Warning: "warning",
    }),
  },
  example: ({ label, ...props }) => <StatusBadge {...props}>{label}</StatusBadge>,
});
