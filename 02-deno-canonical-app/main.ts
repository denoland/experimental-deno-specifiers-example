import chalk from "chalk";
import cowsay from "cowsay";
import $ from "dax";

const data = await $`echo hello`.text();
const message = cowsay.getMessage(data);

console.log(chalk.green(message));