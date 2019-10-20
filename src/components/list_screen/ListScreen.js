import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import ownerTransaction from '../../lib/ownerTransaction'

export class ListScreen extends Component {
    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return this.props.todoList.name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return this.props.todoList.owner;
        }
    }
    onChangeName = (e) => {
        e.preventDefault();
        this.props.nameChange(e);
        /*this.props.todoList.name = e.target.value;*/ }
    onChangeOwner = (e) => {
        e.preventDefault();
        this.props.ownerChange(e);
        /*this.props.todoList.owner = e.target.value;*/ }
    goHome = () => {
        if(this.props.todoList.name == "") {
            alert("This list must have a name!")
        } else {
            this.props.goHome()
        }
    }
    keyPress = (event) => {
        let charCode = String.fromCharCode(event.which).toLowerCase();
        if(event.ctrlKey && charCode === 'z') {
            event.preventDefault();
            this.props.undoTransaction();
        } else if(event.ctrlKey && charCode === 'y') {
            event.preventDefault();
            this.props.doTransaction();
        }
    }
    render() {
        return (
            <div id="todo_list" tabIndex="0" onKeyDown={this.keyPress}>
                <div>
                    <ListHeading goHome={this.goHome} />
                    <ListTrash todoList={this.props.todoList} deleteList={this.props.deleteList}/>
                </div>
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            defaultValue={this.getListName()}
                            type="text" 
                            id="list_name_textfield"
                            onChange={this.onChangeName} />
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            defaultValue={this.getListOwner()}
                            type="text" 
                            id="list_owner_textfield"
                            onChange={this.onChangeOwner} />
                    </div>
                </div>
                <ListItemsTable 
                    todoList={this.props.todoList} 
                    deleteItem={this.props.deleteItem}
                    moveItemUp={this.props.moveItemUp}
                    moveItemDown={this.props.moveItemDown}
                    goItemScreen={this.props.goItemScreen}
                    goEditItemScreen={this.props.goEditItemScreen}
                    sortByTask={this.props.sortByTask}
                    sortByDueDate={this.props.sortByDueDate}
                    sortByCompleted={this.props.sortByCompleted}
                    tps={this.props.tps} />
            </div>
        )
    }
}

export default ListScreen
