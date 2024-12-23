#!/usr/bin/env node
const { program } = require('commander');

program
  .version('0.0.1')
  .description('A CLI tool for managing quizzes');

program
  .command('create-quiz')
  .description('Create a new quiz')
  .action(() => {
    console.log('Creating a new quiz...');
  });

program
  .command('list-quizzes')
  .description('List all quizzes')
  .action(() => {
    console.log('Listing all quizzes...');
  });

program
  .command('take-quiz')
  .description('Take a quiz')
  .action(() => {
    console.log('Taking a quiz...');
  });

program.parse(process.argv);
