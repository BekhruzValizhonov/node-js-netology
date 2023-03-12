const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function game(question) {
  try {
    const randmNum = Math.floor(Math.random() * 100);
    rl.question(question, (answer) => {
      if (+answer === randmNum) {
        rl.write(`Отгадано число :  ${answer}\n`);
        return;
      }

      if (+answer > randmNum) {
        rl.write(`Больше:  ${answer}\n`);
        game(question);
      }

      if (+answer < randmNum) {
        rl.write(`Меньше:  ${answer}\n`);
        game(question);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

game("Отгадай число:");
