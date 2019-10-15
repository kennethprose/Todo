import React, { Component } from 'react'

export class ListItemCard extends Component {
    listSize() {
        return this.props.todoList.items.length - 1;
    }
    
    render() {
        return (
            <div className='list_item_card'>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                <div className={this.props.listItem.completed ? 'list_item_card_completed' : 'list_item_card_not_completed'}>
                    {this.props.listItem.completed ? "Completed" : "Pending"}
                </div>
                <button id="upButton" className={(this.props.listItem.key == 0) ? "listItemButtonsDisabled" : "listItemButtons"}>⇧</button>
                <button id="downButton" className={(this.props.listItem.key == this.listSize()) ? "listItemButtonsDisabled" : "listItemButtons"}>⇩</button>
                <button id="deleteButton" className="listItemButtons">✕</button>
            </div>
        )
    }
}

export default ListItemCard
