import React  from 'react';
import { connect } from 'react-redux';
import './cart.css'
import { StoreService } from "../../services";
import { purchaseBooks, purchaseRequest } from "../../actions";
import { Spinner } from "../Spinner";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
      message: null
    };
  }

  purchase = () => {
    const { items, token, purchaseBooks, purchaseRequest } = this.props;

    purchaseRequest();
    StoreService.post('/purchase', { "books": items }, token)
      .then((data) => {
        purchaseBooks();
        this.setState({
          isShow: true,
          message: data.message
        });
      });
  };

  renderRow = (item) => {
    const { id, title, count, totalPrice } = item;
    return (
      <tr key={id}>
        <td>{title}</td>
        <td>{count}</td>
        <td>{totalPrice}</td>
      </tr>
    )
  };

  renderEmptyCart = () => {
    return (
      <div className="container text-center">
        <i className={`cart fa fa-shopping-cart cartEmpty`}/>
        <p className="cartEmptyText">Cart empty...</p>
      </div>
    );
  };

  renderFilledCart = (items, total) => {
    return (
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
          {items.map(this.renderRow)}
          </tbody>
        </table>
        <div className="total">Total price, $ {total}</div>
      </div>
    );
  };

  renderCartItems = () => {
    const { isCartEmpty, items, total } = this.props;
    const { message, isShow } = this.state;

    if (isShow) {
      return <div className="purchase-message">{message}</div>
    }
    if (isCartEmpty) {
      return this.renderEmptyCart();
    } else {
      return this.renderFilledCart(items, total);
    }
  };

  render() {
    const { isCartEmpty, loading } = this.props;

    return (
      <div className="cart-container">
        <button className="btn btn-primary"
                onClick={this.purchase}
                disabled={isCartEmpty}>
          Purchase
        </button>
        {loading ? <Spinner /> : this.renderCartItems()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.bookAndCart.cart.cartItems,
  total: state.bookAndCart.cart.orderTotal,
  isCartEmpty: state.bookAndCart.cart.isCartEmpty,
  token: state.userData.user.token,
  loading: state.bookAndCart.cart.loading
});

const mapDispatchToProps = {
  purchaseBooks,
  purchaseRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
