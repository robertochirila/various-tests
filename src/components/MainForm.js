import React, { Component } from 'react'
import { CredentialsForm } from './CredentialsForm'
import { PersonalForm } from './PersonalForm'
import { ConfirmSubmit } from './ConfirmSubmit'
import { Success } from './Success'


export class MainForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            step: 1,
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            bio: "",
            occupation: ""
        }

        this.handleIncrementStepSimulation = this.handleIncrementStepSimulation.bind(this)

    }


    handleIncrementStepSimulation(e) {
        const { step } = this.state
        this.setState({ step: step + 1 })
    }

    incrementStepSimulation = (e) => {
        const { step } = this.state
        this.setState({ step: step + 1 })

    }

    handleInputChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({ step: step + 1 })
    }

    previousStep = () => {
        const { step } = this.state
        this.setState({ step: step - 1 })
    }

    render() {
        const { step } = this.state
        const { firstName, lastName, email, occupation, age, bio } = this.state;
        const values = { firstName, lastName, email, occupation, age, bio };


        const renderButtons = (
            <div className="app-simulation-wrapper">
                <label>
                    Increment Step Simulation Using Property
                <button onClick={this.incrementStepSimulation} name="PropertyCallButton">+</button>
                </label>
                <label>
                    Increment Step Simulation Using Bind Inside Constructor
                <button onClick={this.handleIncrementStepSimulation} name="BindMethodButton">+</button>
                </label>
            </div>
        )


        switch (step) {
            case 1:
                return (
                    <React.Fragment>
                        <CredentialsForm
                            values={values}
                            nextStep={this.nextStep}
                            handleInputChange={this.handleInputChange} />
                        {renderButtons}
                    </React.Fragment>
                )
            case 2:
                return (
                    <React.Fragment>
                        <PersonalForm
                            values={values}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            handleInputChange={this.handleInputChange}
                        />
                        {renderButtons}
                    </React.Fragment>
                )
            case 3:
                return (
                    <React.Fragment>
                        <ConfirmSubmit
                            values={values}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                        />
                        {renderButtons}
                    </React.Fragment>
                )
            case 4:
                return (
                    <React.Fragment>
                        <Success />
                    </React.Fragment>
                )
        }
    }
}

export default MainForm
