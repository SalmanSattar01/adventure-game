#! /usr/bin/env node
// import inquirer from "inquirer";
// import  inquirer from 'inquirer';
// // Define a type for the player's choice
// type Choice = {
//     text: string;
//     nextStep: string;
// };
// // Define the steps of the game
// const steps: { [key: string]: { message: string; choices: Choice[] } } = {
//     start: {
//         message: "You wake up in a mysterious room. What do you do?",
//         choices: [
//             { text: "Explore the room", nextStep: "room" },
//             { text: "Go back to sleep", nextStep: "sleep" }
//         ]
//     },
//     room: {
//         message: "You find a door with a lock. What do you do?",
//         choices: [
//             { text: "Find the key to unlock the door", nextStep: "roomplaces" },
//             { text: "Ignore the key and try to break the door", nextStep: "breakDoor" }
//         ]
//     },
//     roomplaces: {
//         message: "There is a Almira, Drawer and Key Hanger. Where will you find the key?",
//         choices: [
//             { text: "In Almira", nextStep: "ghost" },
//             { text: "In Drawer", nextStep: "bloodedhand" },
//             { text: "On Key Hanger", nextStep: "bigbunchofkey" }
//         ]
//     },
//     ghost: {
//         message: "Ghost Appeared and he is trying to kill you. What will you do now?",
//         choices: [
//             { text: "Find the key to unlock the door", nextStep: "roomplaces" },
//             { text: "Ignore the key and try to break the door", nextStep: "outside" }
//         ]
//     },
//     bloodedhand: {
//         message: "There is a cutted hand of a human with lots of blood and key is not there, what will you do now?",
//         choices: [
//             { text: "Find the key to unlock the door", nextStep: "roomplaces" },
//             { text: "Ignore the key and try to break the door", nextStep: "breakDoor" }
//         ]
//     },
//     bigbunchofkey: {
//         message: "There is a bunch of keys on hanger, what will you do now?",
//         choices: [
//             { text: "Try to unlock the door with bunch of keys", nextStep: "keynotfound" },
//             { text: "Ignore the keys and try to break the door", nextStep: "outside" }
//         ]
//     },
//     keynotfound: {
//         message: "Key is not in the Bunch ,now what will you do?",
//         choices: [
//             { text: "Find the key to unlock the door", nextStep: "roomplaces" },
//             { text: "Ignore the key and try to break the door", nextStep: "breakDoor" }
//         ]
//     },
//     killed: {
//         message: "Finding key in bunch took long time so ghost killed you",
//         choices: []
//     },
//     outside: {
//         message: "Congratulations! You've escaped from the mysterious room.",
//         choices: []
//     },
//     breakDoor: {
//         message: "You hurt yourself while trying to break the door. door is not broken yet.",
//         choices: [
//             { text: "Go back to exploring the room", nextStep: "room" }
//         ]
//     },
//     sleep: {
//         message: "You wake up later and find yourself still in the room.",
//         choices: [
//             { text: "Try again", nextStep: "start" }
//         ]
//     }
// };
// // Recursive function to play the game
// async function playGame(step: string) {
//     const currentStep = steps[step];
//     // Display the message for the current step
//     console.log(currentStep.message);
//     // Prompt the player to choose their next action
//     const { choice } = await inquirer.prompt([
//         {
//             type: 'list',
//             name: 'choice',
//             message: 'What do you want to do?',
//             choices: currentStep.choices.map(choice => choice.text)
//         }
//     ]);
//     // Find the next step based on the player's choice
//     const nextStep = currentStep.choices.find(c => c.text === choice)?.nextStep;
//     // If there is a next step, continue playing the game
//     if (nextStep) {
//         await playGame(nextStep);
//     } else {
//         console.log('Game over!');
//     }
// }
// // Start the game
// playGame('start').catch(console.error);
//////////////////////////////////////////////////////
import inquirer from 'inquirer';
import chalk from 'chalk';
// Define the steps of the game
const steps = {
    start: {
        message: chalk.green("You wake up in a mysterious room. What do you do?"),
        choices: [
            { text: "Explore the room", nextStep: "room" },
            { text: "Go back to sleep", nextStep: "sleep" }
        ]
    },
    room: {
        message: chalk.green("You find a door with a lock. What do you do?"),
        choices: [
            { text: "Find the key to unlock the door", nextStep: "roomplaces" },
            { text: "Ignore the key and try to break the door", nextStep: "breakDoor" }
        ]
    },
    roomplaces: {
        message: chalk.green("There is an Almira, Drawer and Key Hanger. Where will you find the key?"),
        choices: [
            { text: "In Almira", nextStep: "ghost" },
            { text: "In Drawer", nextStep: "bloodedhand" },
            { text: "On Key Hanger", nextStep: "bigbunchofkey" }
        ]
    },
    ghost: {
        message: chalk.green("A ghost appeared and is trying to kill you. What will you do now?"),
        choices: [
            { text: "Find the key to unlock the door", nextStep: "killed" },
            { text: "Ignore the key and try to break the door", nextStep: "outside" }
        ]
    },
    bloodedhand: {
        message: chalk.green("There is a severed hand with lots of blood, but no key. What will you do now?"),
        choices: [
            { text: "Find the key to unlock the door", nextStep: "roomplaces" },
            { text: "Ignore the key and try to break the door", nextStep: "breakDoor" }
        ]
    },
    bigbunchofkey: {
        message: chalk.green("There is a bunch of keys on the hanger. What will you do now?"),
        choices: [
            { text: "Try to unlock the door with the bunch of keys", nextStep: "keynotfound" },
            { text: "Ignore the keys and try to break the door", nextStep: "outside" }
        ]
    },
    keynotfound: {
        message: chalk.green("The key is not in the bunch. What will you do now?"),
        choices: [
            { text: "Find the key to unlock the door", nextStep: "roomplaces" },
            { text: "Ignore the key and try to break the door", nextStep: "breakDoor" }
        ]
    },
    killed: {
        message: chalk.red("Oh noooo, Ghost Killed You, Finding the key in the bunch took too long. "),
        choices: []
    },
    outside: {
        message: chalk.green("Congratulations! You've escaped from the mysterious room."),
        choices: []
    },
    breakDoor: {
        message: chalk.green("You hurt yourself while trying to break the door, but it's not broken yet."),
        choices: [
            { text: "Go back to exploring the room", nextStep: "room" }
        ]
    },
    sleep: {
        message: chalk.green("You wake up later and find yourself still in the room."),
        choices: [
            { text: "Try again", nextStep: "start" }
        ]
    }
};
// Recursive function to play the game
async function playGame(step) {
    const currentStep = steps[step];
    // Display the message for the current step
    console.log(currentStep.message);
    // Check if the current step has choices
    if (currentStep.choices.length === 0) {
        console.log(chalk.bgGreenBright('Game over!'));
        return;
    }
    // Prompt the player to choose their next action
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: chalk.green('What do you want to do?'),
            choices: currentStep.choices.map(choice => choice.text)
        }
    ]);
    // Find the next step based on the player's choice
    const nextStep = currentStep.choices.find(c => c.text === choice)?.nextStep;
    // If there is a next step, continue playing the game
    if (nextStep) {
        await playGame(nextStep);
    }
}
// Start the game
playGame('start').catch(console.error);
