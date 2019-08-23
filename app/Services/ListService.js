import List from "../models/List.js";

//Private
let _state = {
    lists: []
}


//Public
export default class ValuesService {
    // changeTheme(index, newColor) {
    //     _state.lists[index].color.push(newColor)
    // }
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?
    constructor() {
        this.getLists()
    }

    //NOTE Add a new task to our list
    addTask(newTask) {
        _state.lists.push(new List(newTask))
        //console.log(_state.lists)
        this.saveLists()
    }

    //NOTE Add a new item to a specific task in our list
    addItem(taskIndex, newItem) {
        _state.lists[taskIndex].item.push(newItem)
        this.saveLists()
    }

    //NOTE Delete task from list
    //Confirms with user to make sure they want to delete that task
    deleteTask(index) {
        let taskDelete = window.confirm("Are you sure you want to delete that task?")
        if (taskDelete == true) {
            _state.lists.splice(index, 1)
        }
        this.saveLists()
    }

    //NOTE Delete a item off of a specific task in our list
    //Confirms with user to make sure they want to delete that item
    deleteItem(taskIndex, itemIndex) {
        let itemDelete = window.confirm("Are you sure you want to delete that item?")
        if (itemDelete == true) {
            _state.lists[taskIndex].item.splice(itemIndex, 1)
        }
        this.saveLists()
    }

    //NOTE returns copy of data
    get List() {
        return _state.lists.map(list => new List(list))
    }


    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
