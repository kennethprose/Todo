export default class nameTransaction {
    constructor(initlistName, initoldName, initnewName) {
        this.listName = initlistName;
        this.oldName = initoldName;
        this.newName = initnewName;
    }

    doTransaction() {
        this.listName = this.newName;
    }

    undoTransaction() {
        this.listName = this.oldName;
    }
}