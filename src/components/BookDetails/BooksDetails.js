import React from 'react';

const BooksDetails = ({ bookId }) => {
  return (
    <ul className="book-list">
      <li>
        <div>Book Details</div>
        <div>{bookId}</div>
      </li>
    </ul>
  )
};

class BooksDetailsContainer extends React.Component {
  componentDidMount() {

  }

  render() {
    return <BooksDetails bookId={this.props.bookId}/>;
  }
}


export default BooksDetailsContainer;
