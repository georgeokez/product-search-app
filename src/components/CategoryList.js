import React, { Component } from "react";
import { ProductList } from "./ProductList";

export class CategoryList extends Component {
  render() {
    const categoryName = this.props.categoryName;
    const products = this.props.products;

    return (
      <div>
        <div className="row font-weight-bold">{categoryName}</div>
        <ProductList products={products} />
      </div>
    );
  }
}
