import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/profile" component={Profile} />
				<Route path="/home" component={Home}></Route>
			</Switch>
		</BrowserRouter>
	);
}
