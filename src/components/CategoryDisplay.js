import React, { Component } from "react";
import { CategoryList } from "./CategoryList";

export class CategoryDisplay extends Component {
  getCategorys(data) {
    let categorySet = new Set(data.map((data) => data.category));
    let categoryArr = [];
    categorySet.forEach((element) => categoryArr.push({ name: element }));
    return categoryArr;
  }

  getProducts(category, data) {
    let products = data.filter((element) => element.category === category);
    let filterProducts = products.map((filterData) => ({
      price: filterData.price,
      stocked: filterData.stocked,
      name: filterData.name,
    }));

    return filterProducts;
  }

  render() {
    let categorys = this.getCategorys(this.props.data);

    return categorys.map((category) => (
      <CategoryList
        key={category.name}
        categoryName={category.name}
        products={this.getProducts(category.name, this.props.data)}
      />
    ));
  }
}
