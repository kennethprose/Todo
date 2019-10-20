export default class ownerTransaction {
    constructor(initlist, initoldOwner, initnewOwner) {
        this.list = initlist;
        this.oldOwner = initoldOwner;
        this.newOwner = initnewOwner;
    }

    doTransaction() {
        this.list.owner = this.newOwner;
    }

    undoTransaction() {
        this.list.owner = this.oldOwner;
        document.getElementById("list_owner_textfield").value = this.oldOwner;
    }
}