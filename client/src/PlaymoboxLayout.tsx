import * as React from "react";
import { Outlet } from "react-router-dom";

const Root: React.FunctionComponent = (): React.ReactElement => {
  return <Outlet />;
};

export default Root;
