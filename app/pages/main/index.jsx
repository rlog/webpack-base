import React from "react";
import Header from "../component/header";
import OrderItem from "./orderItem";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
			<div>
	      <Header />
				<div className="content">
					<OrderItem />
				</div>
			</div>
    );
  }
}

export default Main;
