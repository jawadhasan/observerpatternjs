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


//more transactions
account.withdraw(20);
account.deposit(30);





//shift+alt+f