import React from "react";

class OrderItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="order-item">
        order item
      </div>
    );
  }
}

OrderItem.defaultProps = {

};

export default OrderItem;
