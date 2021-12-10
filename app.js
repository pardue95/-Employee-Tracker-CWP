const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
// const connection = require('./config/connection')
const startingChoices = ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']

const startApp = () => {
    inquirer.prompt({
        name: 'menuChoice',
        type: 'list',
        message: 'Select an option',
        choices: startingChoices

    }).then((answer) => {
        switch (answer.menuChoice) {
            case 'View all Departments':
                viewDepartments();
                break;
            case 'View all Roles':
                viewRoles();
                break;
            case 'View all Employees':
                viewEmployees();
                break;
            case 'Add a Department':
                addDepartment();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'Add an Employee':
                addEmployee();
                break;
            case 'Update an Employee Role':
                updateRole();
                break;
            }
        })
    }

const viewDepartments = () => {
    query = `SELECT department_name AS "Departments" FROM departments`;
    connection.query(query, (err, results) => {
        if (err) throw err;

        console.log('');
        console.table(chalk.yellow('All Departments'), results)
        startApp();
    })
}


    startApp();