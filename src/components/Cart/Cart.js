import React  from 'react';
import { connect } from 'react-redux';
import './cart.css'

const Cart = ({ items, total, onPurchase, isCartEmpty }) => {
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

  if (isCartEmpty) {
    return (
      <div className="container text-center">
        <i className={`cart fa fa-shopping-cart cartEmpty`} />
        <p className="cartEmptyText">Cart empty...</p>
      </div>
    )
  }


  return (
   <div className="cart-container">
      <button className="btn btn-secondary"
              onClick={onPurchase}>Purchase
      </button>
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
      </div>
      <div className="total">Total price, $ {total}</div>
    </div>
    )
};

const mapStateToProps = (state) => ({
  items: state.bookDetails.cartItems,
  total: state.bookDetails.orderTotal,
  isCartEmpty: state.bookDetails.isCartEmpty,
});

const mapDispatchToProps = () => {
  return {
    onPurchase: () => {
      console.log('onPurchase');
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
