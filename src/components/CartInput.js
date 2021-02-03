import React, { Component } from 'react'

export class CartInput extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            eMail: '',
            address: ''
        },
        order: {
            total: this.props.total,
            items: this.props.cart
        }
    }

    handleChange = event => {
        const { name, value } = event.target       
        this.setState({
            [name]: value
        });
    }

    render() {
        const { firstName, lastName, eMail, address } = this.state
        console.log(this.state)
        return (
            <form>
             <label>First Name: </label>   
             <input type="text" 
                value={firstName} 
                name="firstName"
                onChange={event => this.handleChange(event)}
            />
             <label>Last Name: </label>   
             <input type="text" 
                value={lastName} 
                name="lastName"
                onChange={event => this.handleChange(event)}
            />
             <br/>
             <label>Email: </label>
             <input type="email" 
                value={eMail} 
                name="eMail"
                onChange={event => this.handleChange(event)}
            />
             <br/>
             <label>Address: </label>
             <input type="text" 
                value={address} 
                name="address" 
                placeholder="Enter Full Address"
                onChange={event => this.handleChange(event)}
            />
            <br/>
            <input type="submit" value="Confirm Order" />
            </form>
        )
    }
}

export default CartInput
