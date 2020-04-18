import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create an account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className=""
                placeholder="First Name"
                name="firstName"
                noValidate
                onChange={this.handlechange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className=""
                placeholder="Last Name"
                name="lasttName"
                noValidate
                onChange={this.handlechange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className=""
                placeholder="email"
                name="email"
                noValidate
                onChange={this.handlechange}
              />
            </div>  <div className="password">
              <label htmlFor="firstName">Password</label>
              <input
                type="text"
                className=""
                placeholder="password"
                name="password"
                noValidate
                onChange={this.handlechange}
              />
            </div>
          </form>

        </div>


      </div>
    );
  }
}

export default App;
