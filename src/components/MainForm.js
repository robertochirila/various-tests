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
        console.log("Bind function")
        console.log(e.target.name)
        const { step } = this.state
        this.setState({ step: step + 1 })
    }

    incrmentStepSimulation = (e) => {
        console.log("Property function")
        console.log(e.target.name)
        const { step } = this.state
        this.setState({ step: step + 1 })

    }

    render() {
        const { step } = this.state

        const renderButtons = (
            <div>
                <label>
                    Increment Step Simulation Using Property
                <button onClick={this.incrmentStepSimulation} name="PropertyCallButton">+</button>
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
                        <CredentialsForm />
                        {renderButtons}
                    </React.Fragment>
                )
            case 2:
                return (
                    <React.Fragment>
                        <PersonalForm />
                        {renderButtons}
                    </React.Fragment>
                )
            case 3:
                return (
                    <React.Fragment>
                        <ConfirmSubmit />
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
