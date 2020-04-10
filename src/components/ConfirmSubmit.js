import React, { Component } from 'react'

export class ConfirmSubmit extends Component {

    continue = () => {
        this.props.nextStep()
    }

    previous = () => {
        this.props.previousStep()
    }

    render() {

        const { values } = this.props

        return (
            <div>
                <p>Confirm Submit</p>
                <h4><span>First Name :</span>{values.firstName}</h4>
                <h4><span>Last Name :</span>{values.lastName}</h4>
                <h4><span>Email :</span>{values.email}</h4>
                <h4><span>Bio :</span>{values.bio}</h4>
                <h4><span>Age :</span>{values.age}</h4>
                <h4><span>Occupation :</span>{values.occupation}</h4>
                <button onClick={this.continue}>Confirm</button>
                <button onClick={this.previous}>Previous</button>
            </div>
        )
    }
}

export default ConfirmSubmit
