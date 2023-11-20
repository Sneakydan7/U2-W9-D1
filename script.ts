let player1: any = document.getElementById("number1");
let player2: any = document.getElementById("number2");
let button: any = document.getElementById("button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let random: number = Math.floor(Math.random() * 100 + 1);
  if (player1.value === "" || player2.value === "") {
    alert("Scegli un numero per giocare");
  } else {
    let randomBox: any = document.createElement("div");
    let resultRow: any = document.getElementById("result-row");

    randomBox.innerText = random;
    randomBox.classList.add("col-6");
    resultRow.appendChild(randomBox);
  }
  let player1Diff: number = Math.abs(player1.value - random);
  let player2Diff: number = Math.abs(player2.value - random);

  if (player1Diff < player2Diff) {
    alert("Vince il giocatore 1 che si è avvicinato di più");
  } else if (player1Diff > player2Diff) {
    alert("Vince il giocatore 2 che si è avvicinato di più");
  } else if (player1.value === random) {
    alert("Il giocatore 1 ha azzeccato il numero!");
  } else if (player2.value === random) {
    alert("Il giocatore 2 ha azzeccato il numero!");
  } else if (player1.value === player2.value) {
    alert("Entrambi i giocatori hanno vinto");
  } else {
    alert("Entrambi i giocatori hanno azzeccato il numero!!!");
  }
});
