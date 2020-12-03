class Logger {
    constructor() { }

    log(account) {
        console.log(`Logging...Balance: ${account.balance}`);
    }
}
module.exports = Logger;