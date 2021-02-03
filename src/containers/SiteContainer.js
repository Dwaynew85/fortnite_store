import React, { Component } from 'react'
import Nav from '../sites/Nav';
import List from '../sites/List';
import Cart from '../sites/Cart';
import Show from '../components/Show'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

export class SiteContainer extends Component {
    render() {
        return (
          <div className="App">
            <Nav cart={this.props.cart} />
            <Switch>
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
            </Switch>
          </div>
        );
    }
}


const mapStateToProps = state => {
    return {
      cart: state.cart
    }
  }

  const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch({ type: "ADD_TO_CART", item}),
    deleteFromCart: item => dispatch({ type: "DELETE_FROM_CART", item})
  })

export default connect(mapStateToProps, mapDispatchToProps)(SiteContainer);