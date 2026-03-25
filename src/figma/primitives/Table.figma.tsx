import figma from "@figma/code-connect";
import { DataTableRow } from "compositions";

figma.connect(DataTableRow, "<FIGMA_DASHBOARD_TABLE_ROW>", {
  props: {
    type: figma.enum("Type", {
      Data: "data",
    }),
    col1: figma.string("Col 1"),
    col2: figma.string("Col 2"),
    col3: figma.string("Col 3"),
    col4: figma.string("Col 4"),
    col5: figma.string("Col 5"),
  },
  example: ({ col1, col2, col3, col4, col5, ...props }) => (
    <DataTableRow
      {...props}
      columns={[col1, col2, col3, col4, col5]}
    />
  ),
});
