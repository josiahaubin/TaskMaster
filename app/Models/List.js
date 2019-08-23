export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this.task = data.task
        this.item = data.item || []
    }

    getTemplate(index) {
        let template = `

        <div class="col-4 m-3">
            <h1>${this.task}</h1>
            <ul>
            `
        template += this.drawItems(index)

        template += `
            </ul>
            <form onsubmit="app.controllers.listController.addItem(event, ${index})">
                <div class="form-group">
                    <label for="item">Task Item</label>
                    <input type="text" class="form-control" id="item" placeholder="Enter task item" required>
                </div>
                <button type="submit" class="btn btn-success">+</button>
            </form>
        </div>

        `

        return template
    }

    drawItems(taskIndex) {
        let itemTemplate = ``
        this.item.forEach((item, itemIndex) => {
            itemTemplate += `<li>${item} <span onclick="app.controllers.listController.deleteItem(${taskIndex},${itemIndex})">X</span>`
        });

        return itemTemplate
    }
}