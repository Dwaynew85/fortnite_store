import React, { Component } from 'react'
import { submitOrder } from '../actions/orders'

export class CartInput extends Component {
    state = {
        user: {
            first_name: '',
            last_name: '',
            email: '',
            address: ''
        },
    }

    handleChange = event => {
        const { name, value } = event.target       
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        });
    }

    handleSubmit = (event, state) => {
        event.preventDefault();
        submitOrder({...state, order: {
            total: this.props.total,
            items: this.props.cart
        }})
        this.setState({
            user: {
                first_name: '',
                last_name: '',
                email: '',
                address: ''
            },
        })
        this.props.reset()
    }
    
    render() {
        const { first_name, last_name, email, address } = this.state.user
        return (
            <form className="cart-form" onSubmit={event => this.handleSubmit(event, this.state)}>
             <label>First Name: </label>   
             <input type="text" 
                value={first_name} 
                name="first_name"
                onChange={event => this.handleChange(event)}
                required
            />
             <label>Last Name: </label>   
             <input type="text" 
                value={last_name} 
                name="last_name"
                onChange={event => this.handleChange(event)}
                required
            />
             <br/>
             <label>Email: </label>
             <input type="email" 
                value={email} 
                name="email"
                onChange={event => this.handleChange(event)}
                required
            />
             <br/>
             <label>Address: </label>
             <input type="text" 
                value={address} 
                name="address" 
                placeholder="Enter Full Address"
                onChange={event => this.handleChange(event)}
                required
            />
            <br/>
            <input type="submit" value="Confirm Order" />
            </form>
        )
    }
}

export default CartInput
