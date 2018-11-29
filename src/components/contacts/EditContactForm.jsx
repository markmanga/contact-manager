import React, { Component } from 'react';
import { Consumer } from '../../context';
import FormInputFields from './../partials/FormInputFields';
import axios from 'axios';

class EditContactForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    error: {}
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitForm = async(dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    
    // Input requirement check
    if(name === '') {
      this.setState({error: {name: 'Name is required!'}})
      return;
    }
    if(email === '') {
      this.setState({error: {email: 'Email is required!'}})
      return;
    }
    if(phone === '') {
      this.setState({error: {phone: 'Contact no. is required!'}})
      return;
    }
    // Initialize contact update
    const contactUpdate = {
      name: name,
      email: email,
      phone: phone 
    }
    const { id } = this.props.match.params;
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, contactUpdate);
    dispatch({type: 'UPDATE_CONTACTS', payload: res.data});
    // Clear state after update
    this.setState({
      name: '',
      email: '',
      phone: '',
      error: {}
    });

    this.props.history.push('/');
  }

  render() {
    const { name, email, phone, error } = this.state;
    return (
      <Consumer>
        {
          value => {
            const { dispatch } = value;
            return (
              <div className="card mb-3 mt-3">
                <div className="card-header">Edit Contact</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmitForm.bind(this, dispatch)}>
                    <FormInputFields
                      label="Name"
                      name="name"
                      placeholder="Edit name: "
                      value={name}
                      onChange={this.onChangeHandler}
                      error={error.name}
                    />
                    <FormInputFields
                      type="email"
                      label="Email"
                      name="email"
                      placeholder="Edit email: "
                      value={email}
                      onChange={this.onChangeHandler}
                      error={error.email}
                    />
                    <FormInputFields
                      label="Contact no."
                      name="phone"
                      placeholder="Edit contact phone: "
                      value={phone}
                      onChange={this.onChangeHandler}
                      error={error.phone}
                    />
                    <button className="btn btn-dark bg-primary">Submit</button>
                  </form>
                </div>
              </div>
            );
          }
        }
      </Consumer>
    );
  }
}

export default EditContactForm;