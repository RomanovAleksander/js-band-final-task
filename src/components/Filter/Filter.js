import React from "react";
import { connect } from "react-redux";
import { searchBooks, filterBooks } from "../../actions";
import './filter.css';

class Filter extends React.Component {
  onSearchChange = ({ target }) => {
    const { searchBooks } = this.props;
    const searchText = target.value;

    searchBooks(searchText);
  };

  handleFilterChange = ({ target }) => {
    const { filterBooks } = this.props;
    const filterPrice = target.value;

    filterBooks(filterPrice);
  };

  render() {
    const { searchText, filterPrice } = this.props;

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
          onChange={this.handleFilterChange}
          value={filterPrice}
        >
          <option value="all">Price</option>
          <option value="0-15">0-15</option>
          <option value="15-30">15-30</option>
          <option value=">30">&gt;30</option>
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchBooks,
  filterBooks
};

const mapStateToProps = state => ({
  searchText: state.bookList.searchText,
  filterPrice: state.bookList.filterPrice,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
