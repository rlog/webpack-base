var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var Login = require('./page/login/index.jsx');
var Reg   = require('./page/register/index.jsx');

require('./style/main.scss');


var App = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},

	render: function () {
		return (
			<div>
				<RouteHandler />
			</div>
		);
	}
});

var routers = (
	<Router handler={App}>
		<Router name="login_page" handler={Login} />
		<Router name="reg_page" handler={Reg} />
	</Router>
);

Router.run(routers, function (Handler) {
	React.render(<Handler/>, document.getElementById('content'));
});
