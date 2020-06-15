import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Profile from "../pages/RegisterProfile";
import HomeCloud from "../pages/HomeCloud";
import HomeMaster from "../pages/HomeMaster";
import HomeProject from "../pages/HomeProject";
import HomeSearch from "../pages/HomeSearch";
import RegisterStore from "../pages/RegisterStore";
import RegisterServer from "../pages/RegisterServer";
import SearchStore from "../pages/SearchStore";
import EditStore from "../pages/EditStore";
import DeleteStore from "../pages/DeleteStore";
import DeleteServer from "../pages/DeleteServer";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/profile" component={Profile} />
				<PrivateRoute path="/homecloud" component={HomeCloud} />
				<PrivateRoute path="/homemaster" component={HomeMaster} />
				<PrivateRoute path="/homeproject" component={HomeProject} />
				<PrivateRoute path="/homesearch" component={HomeSearch} />
				<PrivateRoute path="/register-store" component={RegisterStore} />
				<PrivateRoute path="/register-server" component={RegisterServer} />
				<PrivateRoute path="/search-store" component={SearchStore} />
				<PrivateRoute path="/edit-store" component={EditStore} />
				<PrivateRoute path="/delete-store" component={DeleteStore} />
				<PrivateRoute path="/delete-server" component={DeleteServer} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}
