import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="wrapper">
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
          </form>

        </div>
      </div>
    );
  }
}

export default App;
