function adduser() {
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location = "game_page.html";
}
document.getElementById("Question").innerHTML = "player1_name";
document.getElementById("Answer").innerHTML = "player2_name";