function game(gamer) {
  const randmNum = Math.floor(Math.random() * 100);

  if (+gamer === randmNum) {
    console.log(`Отгадано число ${gamer}`);
    return;
  }

  if (+gamer > randmNum) {
    console.log("Больше");
    game();
  }

  if (+gamer < randmNum) {
    console.log("Меньше");
    game();
  }
}

game(process.argv.slice(2).join(""));
