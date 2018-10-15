import React, { Component } from "react";
import { render } from "react-dom";
import ShoppingList from "./ShoppingList";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      preloadData: []
    };
  }

  componentDidMount() {
    // Preload data can be from api call
    const preloadData = [
      {
        name: "Milk",
        id: 1
      },
      {
        name: "Egg",
        id: 2
      },
      {
        name: "Dates",
        id: 3
      },
      {
        name: "Vegetables",
        id: 4
      }
    ];
    this.setState({
      preloadData: [...preloadData]
    });
  }

  // On input on change event
  onHandleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  // Filter data using search term in input
  filterSearch = searchTerm => item =>
    `${item.name}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0;

  render() {
    var data = this.state.preloadData;
    var searchTerm = this.state.searchTerm;
    var filterData = data.filter(this.filterSearch(searchTerm));
    return (
      <div>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={this.onHandleChange}
          />
        </div>
        <ShoppingList filterData={filterData} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
