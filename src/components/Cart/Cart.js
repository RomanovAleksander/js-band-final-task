import React  from 'react';
import { connect } from 'react-redux';
import './cart.css'

const Cart = ({ items, total, onPurchase }) => {
  const renderRow = (item) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
      </tr>
    )
  };

  return (
    <div className="cart-container">
      <button className="btn btn-secondary"
              onClick={onPurchase}>Purchase</button>
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
          { items.map(renderRow) }
          </tbody>
        </table>
      </div>
      <div className="total">Total price, $ {total}</div>
    </div>
  )
};

const mapStateToProps = state => ({
  items: state.cartItems,
  total: state.orderTotal,
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
