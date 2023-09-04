import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import theme from "./theme";

export default function Root() {

  return (
    <Container maxWidth="lg">
      <Outlet />
    </Container>
  );
}
