#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright("\n \tWelcome to 'KAXHIF' currency convertor\n"));
// define list of currencies n thier exchange rates 
const currency = {
    USD: 1, // base currency
    EUR: 0.92, // european currency
    GBP: 0.79, // british currency
    INR: 83.29, // indian currency
    JYP: 151.80, // japanese currency
    AUD: 1.51, // australian currency
    CAD: 1.36, //canadian currency
    PKR: 277.98, // pakistani currency
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.yellowBright("Select the Currency to convert from"),
        type: `list`,
        choices: [`USD`, `EUR`, `GBP`, `INR`, `JYP`, `AUD`, `CAD`, `PKR`]
    },
    {
        name: "to",
        message: chalk.blueBright("Select the Currency to convert into"),
        type: `list`,
        choices: [`USD`, `EUR`, `GBP`, `INR`, `JYP`, `AUD`, `CAD`, `PKR`]
    },
    {
        name: "amount",
        message: chalk.magentaBright("Enter the Amount to convert"),
        type: `input`
    },
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.redBright(`Your converted Amount is = ${convertedAmount.toFixed(2)}`));
