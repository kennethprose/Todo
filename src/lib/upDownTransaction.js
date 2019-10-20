export default class upDownTransaction {
    constructor(initList, initListItem1, initListItem1Key, initListItem2, initListItem2Key) {
        this.list = initList;
        this.listItem1 = initListItem1;
        this.listItem1Key = initListItem1Key;
        this.listItem2 = initListItem2;
        this.listItem2Key = initListItem2Key;
    }
    
    doTransaction() {
        console.log("Test");
    }

    undoTransaction() {
        this.list.items[this.listItem2Key] = this.listItem1;
        this.list.items[this.listItem1Key] = this.listItem2;
    }
}