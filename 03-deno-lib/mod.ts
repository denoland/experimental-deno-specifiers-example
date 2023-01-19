import chalk from "chalk";
import cowsay from "cowsay";
import $ from "dax";

export async function getMessage() {
  const data = await $`echo hello`.text();
  const message = cowsay.getSay(data);

  return chalk.green(message);
}
