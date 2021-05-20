const { TestModel } = require('../db');
const { log } = console;

const run = async () => {
  const start = Date.now();
  log(`Loading documents`);
  const data = await TestModel
    .find()
    .exec();
  log(`Loaded ${data.length} documents in ${Date.now() - start}ms`);
  process.exit();
}

run();