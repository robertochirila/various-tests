import React, { Component } from 'react'

export class PersonalForm extends Component {
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
                <h4>PersonalForm</h4>
                <label>
                    Age:
                    <input type="text"
                        placeholder="Age"
                        value={values.age}
                        onChange={this.props.handleInputChange("age")}
                    ></input>
                </label>
                <label>
                    Bio:
                    <input type="text"
                        placeholder="Bio"
                        value={values.bio}
                        onChange={this.props.handleInputChange("bio")}
                    ></input>
                </label>
                <label>
                    Occupation:
                    <input type="text"
                        placeholder="Occupation"
                        value={values.occupation}
                        onChange={this.props.handleInputChange("occupation")}
                    ></input>
                </label>
                <button onClick={this.continue}>Continue</button>
                <button onClick={this.previous}>Previous</button>

            </div>
        )
    }
}

export default PersonalForm
