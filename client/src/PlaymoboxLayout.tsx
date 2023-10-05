import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

const Root: React.FunctionComponent = (): React.ReactElement => {
  return (
    <Box sx={{ display: "flex" }}>
      <Outlet />
    </Box>
  );
};

export default Root;
