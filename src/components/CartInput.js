import React, { Component } from 'react'

export class CartInput extends Component {
    state = {
        firstName: '',
        lastName: '',
        eMail: '',
        address: '',
        order: {}
    }

    handleChange = event => {
        const { name, value } = event.target       
        this.setState({
            [name]: value
        });
    }

    render() {
        console.log(this.props)
        return (
            <form>
             <label>First Name: </label>   
             <input type="text" 
                value={this.state.firstName} 
                name="firstName"
                onChange={event => this.handleChange(event)}
            />
             <label>Last Name: </label>   
             <input type="text" 
                value={this.state.lastName} 
                name="lastName"
                onChange={event => this.handleChange(event)}
            />
             <br/>
             <label>Email: </label>
             <input type="email" 
                value={this.state.email} 
                name="eMail"
                onChange={event => this.handleChange(event)}
            />
             <br/>
             <label>Address: </label>
             <input type="text" 
                value={this.state.address} 
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
