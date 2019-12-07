import React from "react";
import { connect } from "react-redux";
import { searchBook } from "../../actions";
import './filter.css';

class Filter extends React.Component {
  onSearchChange = ({ target }) => {
    const { searchBook, books } = this.props;
    const searchText = target.value;

    searchBook(books, searchText);
  };

  // handleFilterChange = ({ target }) => {
  //   const { filterBook, books } = this.props;
  //   let price = target.value;
  //
  //   filterBook(books, price);
  // };

  render() {
    const { searchText } = this.props;

    return (
      <div className="filter-wrapper">
        <input
          type="search"
          className="form-control mr-sm-2"
          placeholder="search by title"
          onChange={this.onSearchChange}
          value={searchText}
        />
        <select
          className="select-status select"
          key="status"
          // onChange={this.handleFilterChange}
          // value={filterPrice}
        >
          <option value="Price">Price</option>
          <option value="0-15">0-15</option>
          <option value="15-30">15-30</option>
          <option value=">30">&gt;30</option>
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchBook
};

const mapStateToProps = state => ({
  books: state.books,
  searchText: state.searchText,
  // filterPrice: state.filterPrice,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
