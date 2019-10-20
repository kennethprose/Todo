export default class nameTransaction {
    constructor(initlist, initoldName, initnewName) {
        this.list = initlist;
        this.oldName = initoldName;
        this.newName = initnewName;
    }

    doTransaction() {
        this.list.name = this.newName;
    }

    undoTransaction() {
        this.list.name = this.oldName;
        document.getElementById("list_name_textfield").value = this.oldName;
    }
}