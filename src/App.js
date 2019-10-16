import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import EditItemScreen from './components/item_screen/EditItemScreen'
import ListScreen from './components/list_screen/ListScreen'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN",
  EDIT_ITEM_SCREEN: "EDIT_ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    currentItem: -1
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
  }

  goItemScreen = () => {
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
  }

  goEditItemScreen = (key) => {
    this.setState({ currentItem: key });
    this.setState({currentScreen: AppScreen.EDIT_ITEM_SCREEN});
  }

  goListScreen = () => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  }

  reIndexListItems = () => {
    var i;
    for(i=0; i<this.state.currentList.items.length; i++) {
      this.state.currentList.items[i].key = i;
    }
  }

  deleteList = (key) => {
    this.setState({ todoLists: [...this.state.todoLists.filter(todo => todo.key !== key)]});
    this.setState({ currentScreen: AppScreen.HOME_SCREEN});
  }

  deleteItem = (key) => {
    this.state.currentList.items = this.state.currentList.items.filter(item => item.key !== key);
    this.reIndexListItems();
    this.setState({ currentScreen: AppScreen.LIST_SCREEN});
  }

  moveItemUp = (key) => {
    var temp = this.state.currentList.items[key];
    this.state.currentList.items[key] = this.state.currentList.items[key - 1];
    this.state.currentList.items[key - 1] = temp;
    this.reIndexListItems();
    this.setState({ currentScreen: AppScreen.LIST_SCREEN});
  }

  moveItemDown = (key) => {
    var temp = this.state.currentList.items[key];
    this.state.currentList.items[key] = this.state.currentList.items[key + 1];
    this.state.currentList.items[key + 1] = temp;
    this.reIndexListItems();
    this.setState({ currentScreen: AppScreen.LIST_SCREEN});
  }

  onSubmitAdd = (description, assignedTO, dueDate, completed) => {
    this.state.currentList.items.push({
      
        "key": this.state.currentList.items.length,
        "description": description,
        "due_date": dueDate,
        "assigned_to": assignedTO,
        "completed": completed
      
    })
    this.setState({ currentScreen: AppScreen.LIST_SCREEN});
  }

  onSubmitEdit = (description, assignedTO, dueDate, completed) => {
    this.state.currentList.items[this.state.currentItem] = ({
      
        "key": this.state.currentItem,
        "description": description,
        "due_date": dueDate,
        "assigned_to": assignedTO,
        "completed": completed
      
    })
    this.setState({ currentScreen: AppScreen.LIST_SCREEN});
  }

  sortByTask = (bool) => {
    if(bool) {
      this.state.currentList.items.sort(function(a, b){
        var x = a.description.toLowerCase();
        var y = b.description.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
    } else {
      this.state.currentList.items.sort(function(b, a){
        var x = a.description.toLowerCase();
        var y = b.description.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
    }
    this.reIndexListItems();
    this.setState({ currentScreen: AppScreen.LIST_SCREEN});
  }

  sortByDueDate = (bool) => {
    if(bool) {
      this.state.currentList.items.sort(function(a, b){
        var x = a.due_date;
        var y = b.due_date;
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
    } else {
      this.state.currentList.items.sort(function(b, a){
        var x = a.due_date;
        var y = b.due_date;
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
    }
    this.reIndexListItems();
    this.setState({ currentScreen: AppScreen.LIST_SCREEN});
  }

  sortByCompleted = (bool) => {
    if(bool) {
      this.state.currentList.items.sort(function(a, b){
      return (a.completed === b.completed)? 0 : a.completed? -1 : 1;
    });
    } else {
      this.state.currentList.items.sort(function(b, a){
        return (a.completed === b.completed)? 0 : a.completed? -1 : 1;
      });
    }
    this.reIndexListItems();
    this.setState({ currentScreen: AppScreen.LIST_SCREEN});
  }

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists} />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          goHome={this.goHome.bind(this)}
          goItemScreen={this.goItemScreen}
          goEditItemScreen={this.goEditItemScreen}
          todoList={this.state.currentList}
          deleteList={this.deleteList}
          deleteItem={this.deleteItem}
          moveItemUp={this.moveItemUp}
          moveItemDown={this.moveItemDown}
          sortByTask={this.sortByTask}
          sortByDueDate={this.sortByDueDate}
          sortByCompleted={this.sortByCompleted} />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen
          goHome={this.goHome.bind(this)}
          goListScreen={this.goListScreen}
          onSubmitAdd={this.onSubmitAdd} />;
      case AppScreen.EDIT_ITEM_SCREEN:
        return <EditItemScreen
          onSubmitEdit={this.onSubmitEdit}
          goListScreen={this.goListScreen}
          appState={this.state} />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;