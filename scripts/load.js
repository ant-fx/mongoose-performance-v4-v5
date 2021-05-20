const mongoose = require('mongoose');
const chalk = require('chalk');

const { TestModel } = require('../db');
const { log } = console;

const run = async () => {
  const start = Date.now();
  log(chalk.green(`Loading documents using Mongoose ${mongoose.version}`));
  const data = await TestModel
    .find()
    .exec();
  log(chalk.green(`Loaded ${data.length} documents in ${Date.now() - start}ms`));
  process.exit();
}

run();