import { v4 as uuidv4 } from 'uuid';

export default class TodoListItem{
    constructor(title,description) {
        this.isDone = false
        this.title = title
        this.description = description
        this.uuid = uuidv4()
        this.createdTime = new Date().getTime()
    }
    getInfo(){
        return `${this.title} - ${this.description}`
    }
}