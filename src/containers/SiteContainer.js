import React, { Component } from 'react'
import Nav from '../sites/Nav';
import List from '../sites/List';
import Cart from '../sites/Cart';
import Show from '../components/Show'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'

export class SiteContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <Router>
              <div className="App">
                <Nav />
                <Switch>
                  <Route exact path="/store" component={List} addToCart={this.props.addToCart}/>
                  <Route path="/upcoming" component={List} addToCart={this.props.addToCart}/>
                  <Route path="/cart" component={Cart} cart={this.props.cart}/>
                  <Route path="/item/:id" component={Show} />
                </Switch>
              </div>
            </Router>
        );
    }
}


const mapStateToProps = state => {
    return {
      cart: state.cart
    }
  }

export default connect(mapStateToProps,{addToCart})(SiteContainer);
