class Account {

    constructor() {
        this.balance = 0;
        this.observers = [];
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount
            this.notify();
        };
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.notify();
        }
    }


    addObserver(observer){
        //here observer is a callback function passed-in
        this.observers.push(observer);
    }
    
    notify() {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i](this);
        }
    }

}

module.exports = Account;