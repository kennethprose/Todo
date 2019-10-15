import React, { Component } from 'react'

export class ListItemCard extends Component {
    listSize() {
        return this.props.todoList.items.length - 1;
    }

    moveUp = (e) => {
        e.stopPropagation();
        this.props.moveItemUp(this.props.listItem.key)
    }

    moveDown = (e) => {
        e.stopPropagation();
        this.props.moveItemDown(this.props.listItem.key)
    }

    deleteItem = (e) => {
        e.stopPropagation();
        this.props.deleteItem(this.props.listItem.key)
    }

    goEditItemScreen = () => {
        this.props.goEditItemScreen(this.props.listItem.key)
    }
    
    render() {
        return (
            <div className='list_item_card' onClick={this.goEditItemScreen}>
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
                <button onClick={this,this.moveUp} id="upButton" 
                        className={(this.props.listItem.key == 0) ? "listItemButtonsDisabled" : "listItemButtons"} 
                        disabled={(this.props.listItem.key == 0) ? true : false}>⇧</button>
                <button onClick={this,this.moveDown} id="downButton" 
                        className={(this.props.listItem.key == this.listSize()) ? "listItemButtonsDisabled" : "listItemButtons"} 
                        disabled={(this.props.listItem.key == this.listSize()) ? true : false}>⇩</button>
                <button onClick={this.deleteItem} id="deleteButton" className="listItemButtons">✕</button>
            </div>
        )
    }
}

export default ListItemCard
