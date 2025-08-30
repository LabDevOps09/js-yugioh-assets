function calcularMedia() {
  let v1 = Number(document.getElementById("valor1").value);
  let v2 = Number(document.getElementById("valor2").value);
  let v3 = Number(document.getElementById("valor3").value);

  if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
    document.getElementById("resultado").innerText = "Digite valores válidos!";
    return;
  }

  let media = (v1 + v2 + v3) / 3;
  document.getElementById("resultado").innerText = "Média: " + media.toFixed(2);

  let winSound = document.getElementById("winSound");
  let loseSound = document.getElementById("loseSound");

  if (media >= 7) {
    winSound.play();
  } else {
    loseSound.play();
  }
}

// Inicia música de fundo
window.onload = function() {
  let duelMusic = document.getElementById("duelMusic");
  duelMusic.volume = 0.5;
  duelMusic.play();
};
