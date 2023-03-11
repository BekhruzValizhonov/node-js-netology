const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const args = process.argv.slice(2, 4).join("");
const addAndSub = process.argv.slice(-1).join("");

const argv = yargs(hideBin(process.argv))
  .option("params_1", {
    alias: "iso",
    type: "number",
    description: "Current date and time in ISO format",
    default: new Date().toISOString(),
  })
  .option("params_2", {
    alias: "year",
    type: "number",
    description: "This year",
    default: new Date().getFullYear(),
  })
  .option("params_3", {
    alias: "month",
    type: "number",
    description: "This month",
    default: new Date().getMonth(),
  })
  .option("params_4", {
    alias: "date",
    type: "number",
    description: "This date",
    default: new Date().getDate(),
  })
  .option("params_5", {
    alias: "sub",
    type: "number",
    description: "sub",
    default: /[0-9]/.test(addAndSub) && new Date().getMonth() + 1 - +addAndSub,
  })
  .option("params_6", {
    alias: "add",
    type: "number",
    description: "add",
    default: /[0-9]/.test(addAndSub) && new Date().getDate() + +addAndSub,
  }).argv;

switch (args) {
  case "current":
    return console.log(argv.iso);

  case "current-y":
  case "current--year":
    return console.log(argv.year);

  case "current--month":
  case "current-m":
    return console.log(argv.month);

  case "current--date":
  case "current-d":
    return console.log(argv.date);

  case "add-d":
    return console.log(argv.add);

  case "sub--month":
    return console.log(argv.sub);
}
