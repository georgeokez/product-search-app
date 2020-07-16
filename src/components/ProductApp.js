import React, { Component } from "react";
import { SearchBar } from "./SearchBar";
import { ControlStockProducts } from "./ControlStockProducts";
import { CategoryDisplay } from "./CategoryDisplay";

const APIData = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

export default class ProductApp extends Component {
  render() {
    return (
      <div className="container w-25 p-2">
        <SearchBar />
        <ControlStockProducts />
        <div className="row">
          <div className="col font-weight-bold">Name</div>
          <div className="col font-weight-bold">Price</div>
        </div>
        <CategoryDisplay data={APIData} />
      </div>
    );
  }
}
