const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

const csvFolder = 'csv';
const csvFileName = 'nodejs-hw1-ex1.csv';
// const csvFileName = 'MOCK_DATA.csv';
const outputFileName = 'result.txt';

const csvFilePath = path.resolve(__dirname, csvFolder, csvFileName);
const outputPath = path.resolve(__dirname, outputFileName);

const fileReader = fs.createReadStream(csvFilePath, {
  highWaterMark: 1 * 1024,
});
const fileWriter = fs.createWriteStream(outputPath);

fileReader.on('error', err => {
  console.error(`fileReader error\n${err}`);
});
fileWriter.on('error', err => {
  console.error(`fileWriter error\n${err}`);
});

const csvConverter = csv({
  noheader: false,
  //   headers: ['book', 'author', 'amount', 'price'],
});
csvConverter.on('error', err => {
  console.error(`csvConverter error\n${err}`);
});

fileReader.pipe(csvConverter).pipe(fileWriter);
