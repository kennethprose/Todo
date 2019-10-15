import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
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
    console.log(key);
    this.setState({ todoLists: [...this.state.todoLists.filter(todo => todo.key !== key)]});
    this.setState({ currentScreen: AppScreen.HOME_SCREEN});
  }

  deleteItem = (key) => {
    console.log(key);
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

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists} />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList}
          deleteList={this.deleteList}
          deleteItem={this.deleteItem}
          moveItemUp={this.moveItemUp}
          moveItemDown={this.moveItemDown} />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;