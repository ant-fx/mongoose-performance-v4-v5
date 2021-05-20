const uuid = require('uuid');

const { TestModel } = require('../db');
const { log } = console;

const run = async () => {

  const documentsToInsert = 10000;
  let insertedDocuments = 0;

  const insertDoc = async () => {
    await TestModel.create({});

    insertedDocuments += 1;

    if (insertedDocuments % 100 === 0) {
      log(`Inserted ${insertedDocuments} documents`);
    }

    if (insertedDocuments < documentsToInsert) {
      setTimeout(insertDoc, 0);
    } else {
      process.exit();
    }
  }

  insertDoc();
}

run();