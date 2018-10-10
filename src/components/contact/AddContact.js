import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Form } from 'reactstrap';
import { Consumer } from '../../context';
import axios from 'axios';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, phone, email } = this.state;
    if (name === '') {
      this.setState({ errors: { name: "Name field is required" } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: "Email Field is required" } });
      return;
    }

    if (phone === '') {
      this.setState({errors: { phone: "Phone Field is required"}})
      return;
    }
    const newContact = {
      name,
      phone,
      email
    }
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
    dispatch({ type: 'ADD_CONTACT', payload: response.data });
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}

    })
    
    this.props.history.push('/');
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <h1 className="display-4 mb2"> Add <span className='text-danger'>Contact</span></h1>
              <Card className="mb-3">
                <CardHeader>Add Contacts</CardHeader>
                <CardBody>
                  <Form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      name="name"
                      placeholder="Enter Name..."
                      label="Name"
                      value={name}
                      onChange={this.onChange.bind(this)}
                      error={errors.name}
                    />
                    <TextInputGroup
                      name="email"
                      placeholder="Enter Email..."
                      label="Email"
                      value={email}
                      type="email"
                      onChange={this.onChange.bind(this)}
                      error={errors.email}
                    />
                    <TextInputGroup
                      name="phone"
                      placeholder="Enter Phone..."
                      label="Phone"
                      value={phone}
                      onChange={this.onChange.bind(this)}
                      error={errors.phone}
                    />  
                    <input
                      type="submit"
                      value="Create Contact"
                      className="btn btn-block btn-light"
                    />
                  </Form>
                </CardBody>
              </Card>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
