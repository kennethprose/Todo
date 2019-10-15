import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    state = {
        description: this.props.appState.currentList.items[this.props.appState.currentItem].description,
        assignedTo: this.props.appState.currentList.items[this.props.appState.currentItem].assigned_to,
        dueDate: this.props.appState.currentList.items[this.props.appState.currentItem].due_date,
        completed: this.props.appState.currentList.items[this.props.appState.currentItem].completed        
    }
    
    onCancel = () => {
        this.props.goListScreen()
    }

    onSubmitEdit = () => {
        
        this.props.onSubmitEdit(this.state.description, this.state.assignedTo, this.state.dueDate, this.state.completed)
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
                Description: <input type="text" id="description_text" defaultValue={this.props.appState.currentList.items[this.props.appState.currentItem].description} onChange={this.changeDescription}></input><br/>
                Assigned To: <input type="text" id="assignedTo_text" defaultValue={this.props.appState.currentList.items[this.props.appState.currentItem].assigned_to} onChange={this.changeAssignedTo}></input><br/>
                Due Date: <input type="date" id="date_text" defaultValue={this.props.appState.currentList.items[this.props.appState.currentItem].due_date} onChange={this.changeDueDate}></input><br/>
                Completed:<input type="checkbox" id="complete_checkbox" defaultChecked={this.props.appState.currentList.items[this.props.appState.currentItem].completed} onChange={this.changeCompleted}></input><br/>
                <button type="button" id="add_submit_button" onClick={this.onSubmitEdit}>Submit</button><button type="button" id="cancel_button" onClick={this.onCancel}>Cancel</button>
            </div>
        )
    }
}

export default ItemScreen