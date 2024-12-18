import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRankByWins(balance) {
  switch (true) {
    case balance < 10:
      return "Ferro";
    case balance >= 11 && balance <= 20:
      return "Bronze";
    case balance >= 21 && balance <= 50:
      return "Prata";
    case balance >= 51 && balance <= 80:
      return "Ouro";
    case balance >= 81 && balance <= 90:
      return "Diamante";
    case balance >= 91 && balance <= 100:
      return "Lendário";
    case balance >= 101:
      return "Imortal";
    default:
      return "Vitórias inválidas";
  }
}

let heroWins;
let heroLosses;

rl.question("Type the hero wins: ", (input) => {
  heroWins = parseInt(input);

  rl.question("Type the hero losses: ", (input) => {
    heroLosses = parseInt(input);

    let balance = heroWins - heroLosses;

    console.log(
      `O herói tem o saldo de vitórias de ${balance} e está no nível ${getRankByWins(
        balance
      )}`
    );

    rl.close();
  });
});
