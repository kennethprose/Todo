import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

export class ListItemsTable extends Component {
    state = {
        task: false,
        due_date: false,
        completed: false
    }
    
    sortByTask = () => {
        if(this.state.task) {
            this.props.sortByTask(false);
            this.setState({
                task: false
            })
        } else {
            this.props.sortByTask(true);
            this.setState({
                task: true
            })
        }
    }

    sortByDueDate = () => {
        if(this.state.due_date) {
            this.props.sortByDueDate(false);
            this.setState({
                due_date: false
            })
        } else {
            this.props.sortByDueDate(true);
            this.setState({
                due_date: true
            })
        }
    }

    sortByCompleted = () => {
        if(this.state.completed) {
            this.props.sortByCompleted(false);
            this.setState({
                completed: false
            })
        } else {
            this.props.sortByCompleted(true);
            this.setState({
                completed: true
            })
        }
    }
    
    render() {
        return (
            <div>
                <div id="list_items_container" className="list_item_header_card">
                    <div className="list_item_task_header" onClick={this.sortByTask}>Task</div>
                    <div className="list_item_due_date_header" onClick={this.sortByDueDate}>Due Date</div>
                    <div className="list_item_status_header" onClick={this.sortByCompleted}>Status</div>
                </div>
                <div>
                    {
                        this.props.todoList.items.map((todoItem)=>(
                            <ListItemCard 
                                key={todoItem.key} 
                                listItem={todoItem} 
                                todoList={this.props.todoList} 
                                deleteItem={this.props.deleteItem}
                                moveItemUp={this.props.moveItemUp}
                                moveItemDown={this.props.moveItemDown}
                                goEditItemScreen={this.props.goEditItemScreen} />
                        ))
                    }
                </div>
                <div onClick={this.props.goItemScreen} className="list_item_add_card">+</div>
            </div>
        )
    }
}

export default ListItemsTable
