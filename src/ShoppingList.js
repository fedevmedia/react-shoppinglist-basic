import React from "react";

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var list = this.props.filterData;
    return (
      <ul>
        {list.length > 0 ? (
          list.map(item => {
            return <li key={item.id}>{item.name}</li>;
          })
        ) : (
          <div className="norecords">No records</div>
        )}
      </ul>
    );
  }
}

export default ShoppingList;
