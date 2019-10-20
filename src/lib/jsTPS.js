/**
 * jsTPS.js
 * 
 * This class is used for managing an abstract transaction processing
 * system for the purpose of managing an undo/redo system for an
 * application. Note that one must specify all work done via custom
 * transactions.
 * 
 * @author AKKenn (imposter)
 */

export default class jsTPS {
    constructor() {
        this.transactions = new Array();
        this.mostRecentTransaction = -1;
        this.preformingDo = false;
        this.preformingUndo = false;
    }

    isPreformingDo() {
        return this.preformingDo;
    }

    isPreformingUndo() {
        return this.preformingUndo;
    }

    addTransaction(transaction) {
        if((this.mostRecentTransaction < 0) || (this.mostRecentTransaction < (this.transactions.length - 1))) {
            var i;
            for(i = this.transactions.length - 1; i > this.mostRecentTransaction; i--) {
                this.transactions.splice(i, 1);
            }
        }
        this.transactions.push(transaction);
        this.doTransaction();
    }

    doTransaction() {
        if(this.hasTransactionToRedo()) {
            this.preformingDo = true;
            var transaction = this.transactions[this.mostRecentTransaction + 1];
            transaction.doTransaction();
            this.mostRecentTransaction++;
            this.preformingDo = false;
        }
    }

    peekUndo() {
        if(this.hasTransactionToUndo()) {
            return this.transactions[this.mostRecentTransaction];
        } else {
            return null;
        }
    }

    peekDo() {
        if(this.hasTransactionToRedo()) {
            return this.transactions[this.mostRecentTransaction + 1];
        } else {
            return null;
        }
    }

    undoTransaction() {
        if(this.hasTransactionToUndo()) {
            this.preformingUndo = true;
            var transaction = this.transactions[this.mostRecentTransaction];
            transaction.undoTransaction();
            this.mostRecentTransaction = this.mostRecentTransaction - 1;
            this.preformingUndo = false;
        }
    }

    clearAllTransactions() {
        this.transactions = new Array();
        this.mostRecentTransaction = -1;
    }

    getSize() {
        return this.transactions.length;
    }

    getRedoSize() {
        return this.getSize() - this.mostRecentTransaction - 1;
    }

    getUndoSize() {
        return this.mostRecentTransaction + 1;
    }

    hasTransactionToUndo() {
        return this.mostRecentTransaction >= 0;
    }

    hasTransactionToRedo() {
        return this.mostRecentTransaction < (this.transactions.length - 1);
    }

    toString() {
        var text = " --Number of Transactions: " + this.transactions.length;
        text += " --Current Index on Stack: " + this.mostRecentTransaction;
        text += " --Current Transaction Stack:";
        var i;
        for(i = 0; i <= this.mostRecentTransaction; i++) {
            let jT = this.transactions[i];
            text += "----" + jT.toString();
        }
        return text;
    }
}