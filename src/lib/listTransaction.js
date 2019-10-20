export default class listTransaction {
    constructor(initList, initOldList, initNewList) {
        this.list = initList;
        this.oldList = initOldList;
        this.newList = initNewList;
    }

    doTransaction() {
        this.list.items = this.newList;
    }

    undoTransaction() {
        this.list.items = this.oldList;
    }
}