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
    addTask(event) {
        event.preventDefault()

        let form = event.target

        let newTask = {
            task: form.task.value
        }

        _listService.addTask(newTask)
        _drawLists()
    }
    addItem(event, taskIndex) {
        event.preventDefault()

        let form = event.target

        let newItem = form.item.value

        _listService.addItem(taskIndex, newItem)
        _drawLists()
    }
}