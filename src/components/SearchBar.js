import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <input type="text" className="form-control" id="searchBar" />
        </div>
      </form>
    );
  }
}
