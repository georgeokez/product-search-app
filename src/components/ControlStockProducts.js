import React, { Component } from "react";

export class ControlStockProducts extends Component {
  render() {
    return (
      <form>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="controlStock"
          />
          <label className="form-check-label" htmlFor="controlStock">
            Only show products in stock
          </label>
        </div>
      </form>
    );
  }
}
