var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./pages/main/index.jsx');

require('./style/main.scss');

var App = React.createClass({
	render: function () {
		return (
			<div>
				<Main />
			</div>
		);
	}
});

ReactDOM.render(<App/>, document.getElementById('content'));
