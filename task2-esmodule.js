import fs from 'fs';
import path from 'path';
import stream from 'stream';
import csv from 'csvtojson';

const csvFolder = 'csv';
// const csvFileName = 'nodejs-hw1-ex1.csv';
const csvFileName = 'MOCK_DATA.csv';
const outputFileName = 'result.txt';

const csvFilePath = path.resolve(__dirname, csvFolder, csvFileName);
const outputPath = path.resolve(__dirname, outputFileName);

const fileReader = fs.createReadStream(csvFilePath, {
  //   highWaterMark: 1 * 1024,
});
const fileWriter = fs.createWriteStream(outputPath);

const csvConverter = csv({
  noheader: false,
  //   headers: ['book', 'author', 'amount', 'price'],
});

// fileReader.pipe(csvConverter).pipe(fileWriter);
stream.pipeline(fileReader, csvConverter, fileWriter, err => {
  if (err) {
    console.error('Pipeline error:', err);
  } else {
    console.log('converting is complete');
  }
});
