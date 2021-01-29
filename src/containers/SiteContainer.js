import React, { Component } from 'react'
import Nav from '../sites/Nav';
import List from '../sites/List';
import Cart from '../sites/Cart';
import Show from '../components/Show'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'

export class SiteContainer extends Component {
    render() {
        console.log(this.props)
        return (
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path="/store" component={List}/>
              <Route path="/upcoming" component={List}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/item/:id" component={Show} />
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

export default connect(mapStateToProps,{addToCart})(SiteContainer);
