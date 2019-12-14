import React  from 'react';
import { connect } from 'react-redux';
import './cart.css'
import StoreService from "../../services/StoreService";
import { purchaseBooks } from "../../actions";

const Cart = ({ items, total, purchaseBooks, isCartEmpty, token }) => {
  const purchase = () => {
    StoreService.post('/purchase', { "books": items }, token)
      .then((data) => {
        purchaseBooks(data.message)
      });
  };

  const renderRow = (item) => {
    const { id, title, count, totalPrice } = item;
    return (
      <tr key={id}>
        <td>{title}</td>
        <td>{count}</td>
        <td>{totalPrice}</td>
      </tr>
    )
  };

  const empty = (
    <div className="container text-center">
      <i className={`cart fa fa-shopping-cart cartEmpty`} />
      <p className="cartEmptyText">Cart empty...</p>
    </div>
  );

  const fill = (
    <div className="table-wrapper">
      <table>
        <thead>
        <tr>
          <th>Book title:</th>
          <th>Count:</th>
          <th>Total price:</th>
        </tr>
        </thead>
        <tbody>
        {items.map(renderRow)}
        </tbody>
      </table>
      <div className="total">Total price, $ {total}</div>
    </div>
  );

  return (
   <div className="cart-container">
      <button className="btn btn-primary"
              onClick={purchase}
              disabled={isCartEmpty}>
        Purchase
      </button>
     {isCartEmpty ? empty : fill}
    </div>
    )
};

const mapStateToProps = (state) => ({
  items: state.bookDetails.cartItems,
  total: state.bookDetails.orderTotal,
  isCartEmpty: state.bookDetails.isCartEmpty,
  purchaseMessage: state.bookDetails.purchaseMessage,
  token: state.userData.token,
});

const mapDispatchToProps = {
  purchaseBooks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
