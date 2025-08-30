const score = { player: 0, computer: 0 };

function play(playerChoice) {
  const choices = ["Pedra", "Papel", "Tesoura"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("playerCard").src = getImage(playerChoice);
  document.getElementById("computerCard").src = getImage(computerChoice);

  let result = "";
  if (playerChoice === computerChoice) {
    result = "Empate!";
  } else if (
    (playerChoice === "Pedra" && computerChoice === "Tesoura") ||
    (playerChoice === "Papel" && computerChoice === "Pedra") ||
    (playerChoice === "Tesoura" && computerChoice === "Papel")
  ) {
    result = "Você ganhou!";
    score.player++;
  } else {
    result = "Computador ganhou!";
    score.computer++;
  }

  document.getElementById("score").innerText =
    `Jogador: ${score.player} | Computador: ${score.computer}`;
  document.getElementById("result").innerText = result;
}

function getImage(choice) {
  switch (choice) {
    case "Pedra": return "https://i.imgur.com/EZ8Y0sq.jpg"; // Windy (exemplo)
    case "Papel": return "https://i.imgur.com/7jQyJGl.jpg"; // Watery
    case "Tesoura": return "https://i.imgur.com/2e4e6vj.jpg"; // Firey
  }
}
