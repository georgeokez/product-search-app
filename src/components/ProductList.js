import React, { Component } from "react";
import { ProductRow } from "./ProductRow";

export class ProductList extends Component {
  render() {
    const products = this.props.products;

    return products.map((product) => (
      <ProductRow
        key={product.name}
        name={product.name}
        price={product.price}
        stocked={product.stocked}
      />
    ));
  }
}
