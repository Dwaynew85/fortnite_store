import React, { Component } from 'react'
import Nav from '../sites/Nav';
import List from '../sites/List';
import Cart from '../sites/Cart';
import OrderHistory from '../sites/OrderHistory'
import Show from '../components/Show'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchOrders } from '../actions/orders'

export class SiteContainer extends Component {
    render() {
      console.log(this.props)
        return (
          <div className="App">
            <Nav cart={this.props.cart} />
            <Switch>
              <Route exact path="/">
                <Redirect to="/store"/>
              </Route>
              <Route path="/store">
                <List/>
              </Route>
              <Route path="/upcoming">
                <List/>
              </Route>
              <Route path="/cart">
                <Cart cart={this.props.cart} deleteFromCart={this.props.deleteFromCart}/>
              </Route>
              <Route path="/item/:id">
                <Show addToCart={this.props.addToCart} cart={this.props.cart}/>
              </Route>
              <Route path="/history">
                <OrderHistory fetchOrders={this.props.fetchOrders} orders={this.props.orders}/>
              </Route>
            </Switch>
          </div>
        );
    }
}


const mapStateToProps = state => {
    return {
      cart: state.cart,
      orders: state.orders
    }
  }

  const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch({ type: "ADD_TO_CART", item}),
    deleteFromCart: item => dispatch({ type: "DELETE_FROM_CART", item}),
    fetchOrders: () => dispatch(fetchOrders())
  })

export default connect(mapStateToProps, mapDispatchToProps)(SiteContainer);