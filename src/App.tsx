import React from "react";
import { Layout } from "./Layout";
import CssBaseline from "@material-ui/core/CssBaseline";

const HelloWorld = () => <div>Hello World!</div>;

const App = () => {
  // Setup theme to be able to toggle between dark and light mode
  // Use hooks and contextApi
  // Setup navigation with react router
  // Set up login with Google

  return (
    <>
      <CssBaseline />
      <Layout>
        <HelloWorld />
      </Layout>
      ;
    </>
  );
};

export default App;
