import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import App from './App';
import './index.css';
import requireAuth from './components/auth/require_auth';
import GoalSubmit from './components/goals/goal_submit';
import DisplayLog from './components/event/display_log';
import ProgressView from './components/progress/progress_view';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Home from './components/home/home'
import { AUTH_USER } from './actions/index';
import { fetchAllData } from './actions/index';
import store from './store';

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

// if token is saved to localStorage, automatically authenticate user
if (token) {
	store.dispatch({ type: AUTH_USER });
}

if (user) {
	store.dispatch(fetchAllData());
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="/goals" component={requireAuth(GoalSubmit)}>
				</Route>
				<Route path="/log" component={DisplayLog}>
				</Route>
				<Route path="/progress" component={requireAuth(ProgressView)}>
				</Route>
				<Route path="/signin" component={Signin}>
				</Route>
				<Route path="/signout" component={Signout}>
				</Route>
				<Route path="/signup" component={Signup}>
				</Route>
			</Route>
		</Router>
	</Provider>, document.getElementById('root')
);

