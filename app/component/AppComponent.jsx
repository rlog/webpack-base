var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
	render: function(){
		return (
            <div>
                <h1>Yo, Hello world!</h1>
                <ul>
                    <li><Link to="app">Home</Link></li>
                    <li><Link to="login">login</Link></li>
                    <li><Link to="reg">reg</Link></li>
                </ul>

                <RouteHandler />
            </div>
        );
	}
});

var routers = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" handler={Login} />
        <Route name="reg" handler={Reg} />
    </Route>
);

Router.run(routers, function(Handler){
    React.render(<Handler/>, doucument.getElementById('content'))
});