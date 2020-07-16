import React, { Component } from "react";
import "../styles/productRowStyle.css";

export class ProductRow extends Component {
  getClassStyle(stocked) {
    if (!stocked) {
      return "col ml-2 md-2 stocked-product";
    }
    return "col ml-2 md-2";
  }

  render() {
    return (
      <div className="row p-2">
        <div className={this.getClassStyle(this.props.stocked)}>
          {this.props.name}
        </div>
        <div className="col ml-2 md-2">{this.props.price}</div>
      </div>
    );
  }
}
