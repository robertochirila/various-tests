import React, { Component } from 'react'

export class CredentialsForm extends Component {

    continue = () => {
        this.props.nextStep()
    }

    render() {

        const { values } = this.props

        return (
            <div>
                <h4>Credentials Form
                </h4>
                <label>
                    First Name:
                    <input type="text"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={this.props.handleInputChange("firstName")}
                    ></input>
                </label>
                <label>
                    Last Name:
                    <input type="text"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={this.props.handleInputChange("lastName")}
                    ></input>
                </label>
                <label>
                    Email:
                    <input type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={this.props.handleInputChange("email")}
                    ></input>
                </label>
                <button onClick={this.continue}>Continue</button>
            </div>
        )
    }
}

export default CredentialsForm
