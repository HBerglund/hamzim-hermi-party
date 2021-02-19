import React from "react";
import AppLayout from "./Layout";
import CssBaseline from "@material-ui/core/CssBaseline";

const HelloWorld = () => <div>Hello World!</div>;

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppLayout />;
    </>
  );
};

export default App;
