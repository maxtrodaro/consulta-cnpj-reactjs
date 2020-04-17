import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/RegisterProfile";
import Home from "./pages/Home";
import RegisterStore from "./pages/RegisterStore";
import SearchStore from "./pages/SearchStore";
import EditStore from "./pages/EditStore";
import DeleteStore from "./pages/DeleteStore";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/profile" component={Profile} />
				<Route path="/home" component={Home} />
				<Route path="/register-store" component={RegisterStore} />
				<Route path="/search-store" component={SearchStore} />
				<Route path="/edit-store" component={EditStore} />
				<Route path="/delete-store" component={DeleteStore} />
			</Switch>
		</BrowserRouter>
	);
}
