import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import './index.css';
import requireAuth from './components/auth/require_auth';
import GoalSubmit from './components/goals/goal_submit';
import EventSubmit from './components/event/event_submit';
import ProgressView from './components/progress/progress_view';
import Signin from './components/auth/signin';
import Navigation from './components/nav/navigation';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/goals" component={requireAuth(GoalSubmit)}>
				</Route>
				<Route path="/log" component={EventSubmit}>
				</Route>
				<Route path="/progress" component={ProgressView}>
				</Route>
				<Route path="/signin" component={Signin}>
				</Route>
				<Route path="/nav" component={Navigation}>
				</Route>
			</Route>
		</Router>
	</Provider>, document.getElementById('root')
);

