var player1 = document.getElementById("number1");
var player2 = document.getElementById("number2");
var button = document.getElementById("button");
button.addEventListener("click", function (e) {
    e.preventDefault();
    var random = Math.floor(Math.random() * 100 + 1);
    if (player1.value === "" || player2.value === "") {
        alert("Scegli un numero per giocare");
    }
    else {
        var randomBox = document.createElement("div");
        var resultRow = document.getElementById("result-row");
        randomBox.innerText = random;
        randomBox.classList.add("col-6");
        resultRow.appendChild(randomBox);
    }
    var player1Diff = Math.abs(player1.value - random);
    var player2Diff = Math.abs(player2.value - random);
    if (player1Diff < player2Diff) {
        alert("Vince il giocatore 1 che si è avvicinato di più");
    }
    else if (player1Diff > player2Diff) {
        alert("Vince il giocatore 2 che si è avvicinato di più");
    }
    else if (player1.value === random) {
        alert("Il giocatore 1 ha azzeccato il numero!");
    }
    else if (player2.value === random) {
        alert("Il giocatore 2 ha azzeccato il numero!");
    }
    else if (player1.value === player2.value) {
        alert("Entrambi i giocatori hanno vinto");
    }
    else {
        alert("Entrambi i giocatori hanno azzeccato il numero!!!");
    }
});
