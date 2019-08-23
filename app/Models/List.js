export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this.task = data.task
        this.item = data.item
    }

    getTemplate() {
        let template = `

        <div class="col-4 m-3">
            <h1>${this.task}</h1>

        </div>

        `

        return template
    }
}