class Emailer {
    constructor() { }

    sendEmail(account) {
        console.log(`Sending email...Balance: ${account.balance}`);
    }
}
module.exports = Emailer;