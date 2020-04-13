import React, { Component } from 'react'
import { connect } from "react-redux"
import { addItem } from "../actions/itemActions"
import PropTypes from 'prop-types';

export class ListForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            task: "",
            description: ""
        }
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: [e.target.value] })

    }

    onSubmit = (e) => {
        e.preventDefault()

        const item = {
            title: this.state.task,
            description: this.state.description
        }

        console.log(item)

        console.log(addItem)

        console.log(this.props)

        //this.props.addItem(item)
    }


    render() {
        return (
            <React.Fragment>
                <h1>Add Task</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Task Name: </label>
                        <br />
                        <input
                            type="text"
                            name="title"
                            onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label>
                        <br />
                        <textarea
                            name="Task Description"
                            onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </React.Fragment>
        );
    }
}

ListForm.propTypes = {
    addItem: PropTypes.func.isRequired
};

/*const mapStateToProps = state => ({
    addItem: state.posts.items
});*/

export default connect(null, { addItem })(ListForm);