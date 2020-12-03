let Account = require('./account');
let Emailer = require('./emailer');
let Logger = require('./logger')


let account = new Account();

let emailer = new Emailer();
let logger = new Logger();


//register callbacks
account.addObserver(emailer.sendEmail);
account.addObserver(logger.log);

//Deposit
account.deposit(100);

//Withdraw
account.withdraw(50);

//
console.log(`index...Balance: ${account.balance}`);


//more transactions
account.withdraw(20);
account.removeObserver(logger.log);
account.deposit(30);

//we should see 4 emails and 3 log commands





//shift+alt+f