#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let pinCode = 22331;
let userAns = await inquirer.prompt([
    {
        message: "please enter your pin code",
        type: "number",
        name: "userPinCode",
    },
]);
if (userAns.userPinCode === pinCode) {
    console.log("correct your pin code");
    let operation = await inquirer.prompt([
        {
            message: "please enter one option",
            type: "list",
            name: "option",
            choices: ["withdraw", "check balance"],
        },
    ]);
    if (operation.option === "withdraw") {
        console.log("please select options");
        let fastCash = await inquirer.prompt([
            {
                message: "please select one option",
                type: "list",
                name: "select",
                choices: ["1000", "5000", "10000", "anyAmount"],
            },
        ]);
        let amount = 0;
        if (fastCash.select === "anyAmount") {
            let anyAmount = await inquirer.prompt([
                {
                    message: "please enter amount",
                    type: "number",
                    name: "takeMoney",
                },
            ]);
            amount = anyAmount.takeMoney;
        }
        else {
            amount = fastCash.select;
        }
        if (amount <= 10000) {
            myBalance -= amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log("please enter correct amount");
        }
    }
    else if (operation.option === "check balance") {
        console.log(`your current balance is ${myBalance}`);
    }
}
else {
    console.log("incorrect pin code");
}
