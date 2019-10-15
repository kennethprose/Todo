import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    state = {
        addItem: true,
        description: "",
        assignedTo: "",
        dueDate: "",
        completed: false        
    }
    
    onCancel = () => {
        this.props.goHome()
    }

    onSubmit = () => {
        this.props.onSubmit(this.state.addItem, this.state.description, this.state.assignedTo, this.state.dueDate, this.state.completed)
    }

    changeDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    changeAssignedTo = (e) => {
        this.setState({ assignedTo: e.target.value })
    }

    changeDueDate = (e) => {
        this.setState({ dueDate: e.target.value })
    }

    changeCompleted = (e) => {
        this.setState({ completed: e.target.checked })
    }
    
    render() {
        return (
            <div id="list_item_add_card">
                <div id="list_item_add_header">Item</div>
                Description: <input type="text" id="description_text" value={this.state.description} onChange={this.changeDescription}></input><br/>
                Assigned To: <input type="text" id="assignedTo_text" value={this.state.assignedTo} onChange={this.changeAssignedTo}></input><br/>
                Due Date: <input type="date" id="date_text" value={this.state.dueDate} onChange={this.changeDueDate}></input><br/>
                Completed:<input type="checkbox" id="complete_checkbox" onChange={this.changeCompleted}></input><br/>
                <button type="button" id="add_submit_button" onClick={this.onSubmit}>Submit</button><button type="button" id="cancel_button" onClick={this.onCancel}>Cancel</button>
            </div>
        )
    }
}

export default ItemScreen
