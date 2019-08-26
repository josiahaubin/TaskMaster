import ListService from "../Services/ListService.js";

//Private
let _listService = new ListService()

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
    let template = ``
    let list = _listService.List

    list.forEach((list, index) => {
        template += list.getTemplate(index)
    })

    document.getElementById('tasks').innerHTML = template
}



//Public
export default class ListController {
    constructor() {
        //NOTE: When the app first starts we want to pull any potential data out of memory
        _listService.getLists();
        //NOTE: After updating the store, we can automatically call to draw the lists.
        _drawLists();
    }

    //TODO: Your app will need the ability to create, and delete both lists and listItems
    //NOTE Let service know that the user wants to add a task
    addTask(event) {
        event.preventDefault()

        let form = event.target

        let newTask = {
            task: form.task.value,
            color: form.themeColor.value
        }

        _listService.addTask(newTask)
        _drawLists()
    }
    //NOTE  Let service know that the user wants to add a item to a task
    addItem(event, taskIndex) {
        event.preventDefault()

        let form = event.target

        let newItem = form.item.value

        _listService.addItem(taskIndex, newItem)
        _drawLists()
    }
    //NOTE Let service know that the user wants to delete a task
    deleteTask(index) {
        _listService.deleteTask(index)
        _drawLists()
    }
    //NOTE Let service know that the user wants to delete an item from the task
    deleteItem(taskIndex, itemIndex) {
        _listService.deleteItem(taskIndex, itemIndex)
        _drawLists()
    }
}