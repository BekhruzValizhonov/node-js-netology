function foo(arg) {
  const random = Math.floor(Math.random() * 2 + 1);
  try {
    if (+arg === random) {
      console.log("Вы угадали");
      return;
    }
    if (+arg > random) {
      console.log("Попробуйте еще раз");
      foo();
    }

    if (+arg < random) {
      console.log("Попробуйте еще раз");
      foo();
    }
  } catch (error) {
    console.log(error);
  }
}

foo(process.argv.slice(2).join(""));
