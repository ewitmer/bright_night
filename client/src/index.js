import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import './index.css';
import store from './store';
import requireAuth from './components/require_auth';
import GoalSubmit from './components/goal_submit';
import EventSubmit from './components/event_submit';
import ProgressView from './components/progress_view';


ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/goals" component={requireAuth(GoalSubmit)}>
				</Route>
				<Route path="/log" component={requireAuth(EventSubmit)}>
				</Route>
				<Route path="/progress" component={requireAuth(ProgressView)}>
				</Route>
			</Route>
		</Router>
	</Provider>, document.getElementById('root')
);

