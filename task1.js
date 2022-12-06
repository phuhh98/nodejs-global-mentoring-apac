const readline = require('readline');

const promtRL = readline.createInterface({
  input: process.stdin,
  //   output: process.stdout,
});
promtRL.on('line', line => {
  readline.clearScreenDown();
  let reversed = reverseString(line);
  process.stdout.write(`${reversed}\n`);
  promtRL.prompt();
});

process.on('SIGINT', () => {
  process.stdout.write('exit the program\n');
  process.exit();
});

function reverseString(str) {
  let reversed = [];
  for (let index = str.length - 1; index >= 0; index--) {
    reversed.push(str[index]);
  }
  return reversed.join('');
}
