import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Form } from 'reactstrap';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  static defaultProps = {
    name: 'Victor Ughonu',
    email: 'victorughonu@gmail.com',
    phone: '08165660498'
  };

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    }
    console.log(contact);
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <Card className="mb-3">
          <CardHeader>Add Contacts</CardHeader>
          <CardBody>
            <Form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Name..."
                  defaultValue={name}
                  ref={this.nameInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Email..."
                  defaultValue={email}
                  ref={this.emailInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter Phone..."
                  defaultValue={phone}
                  ref={this.phoneInput}
                />
              </div>
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
  }
}

export default AddContact;
