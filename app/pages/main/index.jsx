import React from "react";
import Header from "../component/header";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
			<div>
	      <Header />
				<p>Hello World</p>
			</div>
    );
  }
}

export default Main;
