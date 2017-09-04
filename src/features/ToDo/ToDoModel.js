export default class ToDo {
    constructor(id, date, title, text) {
        this.id = id;
        this.isDone = false;
        this.date = date;
        this.title = title;
        this.text = text;
    }
}
