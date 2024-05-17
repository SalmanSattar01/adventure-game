#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
// Define the steps of the game
const steps = {
    start: {
        message: chalk.bgGreenBright.blueBright("You wake up in a mysterious room. What do you do?"),
        choices: [
            { text: "Explore the room", nextStep: "room" },
            { text: "Go back to sleep", nextStep: "sleep" }
        ]
    },
    room: {
        message: chalk.bgGreenBright.blueBright("You find a door with a lock. What do you do?"),
        choices: [
            { text: "Find the key to unlock the door", nextStep: "roomplaces" },
            { text: "Ignore the key and try to break the door", nextStep: "breakDoor" }
        ]
    },
    roomplaces: {
        message: chalk.bgGreenBright.blueBright("There is an Almira, Drawer and Key Hanger. Where will you find the key?"),
        choices: [
            { text: "In Almira", nextStep: "ghost" },
            { text: "In Drawer", nextStep: "bloodedhand" },
            { text: "On Key Hanger", nextStep: "bigbunchofkey" }
        ]
    },
    ghost: {
        message: chalk.bgGreenBright.blueBright("A ghost appeared and is trying to kill you. What will you do now?"),
        choices: [
            { text: "Find the key to unlock the door", nextStep: "killed" },
            { text: "Ignore the key and try to break the door", nextStep: "outside" }
        ]
    },
    bloodedhand: {
        message: chalk.bgGreenBright.blueBright("There is a hand cut with lots of blood, but no key. What will you do now?"),
        choices: [
            { text: "Find the key to unlock the door", nextStep: "roomplaces" },
            { text: "Ignore the key and try to break the door", nextStep: "breakDoor" }
        ]
    },
    bigbunchofkey: {
        message: chalk.bgGreenBright.blueBright("There is a bunch of keys on the hanger. What will you do now?"),
        choices: [
            { text: "Try to unlock the door with the bunch of keys", nextStep: "keynotfound" },
            { text: "Ignore the keys and try to break the door", nextStep: "outside" }
        ]
    },
    keynotfound: {
        message: chalk.bgGreenBright.blueBright("The key is not in the bunch. What will you do now?"),
        choices: [
            { text: "Find the key to unlock the door", nextStep: "roomplaces" },
            { text: "Ignore the key and try to break the door", nextStep: "breakDoor" }
        ]
    },
    killed: {
        message: chalk.bgRedBright.blackBright("Oh noooo, Ghost Killed You, Finding the key in the room took too long. "),
        choices: []
    },
    outside: {
        message: chalk.bgGreenBright.blueBright("Congratulations! You've escaped from the mysterious room."),
        choices: []
    },
    breakDoor: {
        message: chalk.bgGreenBright.blueBright("You hurt yourself while trying to break the door, but it's not broken yet."),
        choices: [
            { text: "Go back to exploring the room", nextStep: "room" }
        ]
    },
    sleep: {
        message: chalk.bgGreenBright.blueBright("You wake up later and find yourself still in the room."),
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
        console.log(chalk.bgGreenBright.red('Game over!'));
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
