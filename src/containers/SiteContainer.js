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
            <Nav />
            <Switch>
              <Route path="/store">
                <List/>
              </Route>
              <Route path="/upcoming">
                <List/>
              </Route>
              <Route path="/cart">
                <Cart cart={this.props.cart} delete={this.props.deleteFromCart}/>
              </Route>
              <Route path="/item/:id">
                <Show addToCart={this.props.addToCart}/>
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
    deleteFromCart: id => dispatch({ type: "DELETE_FROM_CART", id})
  })

export default connect(mapStateToProps, mapDispatchToProps)(SiteContainer);