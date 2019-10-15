import React, { Component } from 'react'

export class ListTrash extends Component {
    state={
        showPopup: false
    }
    
    onClick = () => {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    deleteList = () => {
        this.setState({
            showPopup: !this.state.showPopup
        })
        this.props.deleteList(this.props.todoList.key)
    }
    
    render() {
        return (
            <div>
                <div id="list_trash" onClick={this.onClick.bind(this)}>&#128465;</div>
                { this.state.showPopup ?
                    <div id="popup" className='showing'>
                        <div id="popup_content" className='showing'>
                            <div id="popup_question1">Delete List?</div>
                            <strong id="popup_question2">Are you sure you want to delete this list?</strong>
                            <div id="popup_options">
                                <div id="popup_yes" onClick={this.deleteList.bind(this)}>Yes</div>
                                <div id="popup_no" onClick={this.onClick.bind(this)}>No</div>
                            </div>
                            <div id="popup_warning">The list will not be retreivable.</div>
                        </div>
                    </div> 
                    :
                    <div id="popup">
                        <div id="popup_content" className=''>
                            <div id="popup_question1">Delete List?</div>
                            <strong id="popup_question2">Are you sure you want to delete this list?</strong>
                            <div id="popup_options">
                                <div id="popup_yes" onClick={this.deleteList.bind(this)}>Yes</div>
                                <div id="popup_no" onClick={this.onClick.bind(this)}>No</div>
                            </div>
                            <div id="popup_warning">The list will not be retreivable.</div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default ListTrash
