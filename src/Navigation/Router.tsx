import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./Layout";

const Home = () => <>Hello Home</>;

const Movies = () => <>Hello Movies</>;

const Series = () => <>Hello Series</>;

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/movies" component={Movies} />
    <Route path="/series" component={Series} />
  </Switch>
);

export const Router = () => (
  <Layout>
    <Routes />
  </Layout>
);
