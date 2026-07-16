document.getElementById("MAZOER").onclick = function() {
    var win = window.open("", "_blank");
    win.document.write("<h1>MAZOER</h1>");
    win.document.write("<h2>Status: Delayed</h2>");
    win.document.write("<p>MAZOER is a project currently developed by the ONLU team, it is a game inspired by the popular game Identity Fraud. It will be developed inside of the UGC platform named Luduvo founded by Isaac Ahmado (The company Luduvo established on August 21, 2025), and it will be available for players soon. It is currently in the development phase, so please be patient! In the meantime, you can discover information about our other projects on this website!</p>");
    win.document.close();
    win.document.body.style.backgroundColor = "black";
    win.document.body.style.color = "yellow";
    win.document.body.style.fontFamily = "Times New Roman, sans-serif";
    win.document.body.style.fontSize = "35px";
    win.document.body.style.textAlign = "left";
}
document.getElementById("FLOWER.").onclick = function() {
    var win = window.open("", "_blank");
    win.document.write("<h1>FLOWER.</h1>");
    win.document.write("<h2>Status: Delayed</h2>");
    win.document.write("<p>FLOWER. is another project currently in early-development. FLOWER. is a game based on the popular game Baldis Basics, it will follow a same route as Baldis Basics and countless of characters will appear in the game, which are all unique and have their own personalities. They are gonna ask for stuff then you have to provide it to them to get notes. Notes are the main objective of the game, you must collect them all to finish the game. More information on Flower. Will come soon, please be patient!</p>");
    win.document.close();
    win.document.body.style.backgroundColor = "black";
    win.document.body.style.color = "yellow";   
    win.document.body.style.fontFamily = "Times New Roman, sans-serif";
    win.document.body.style.fontSize = "35px";
    win.document.body.style.textAlign = "left";
}
document.getElementById("Credits").onclick = function() {
    var win = window.open("", "_blank");
    win.document.write("<h1>Credits</h1>");
    win.document.write("<h2>Developers</h2>");
    win.document.write("<p>@OfficialAntE - The founder of team ONLU, and is currently the only developer on team ONLU. He made this website, with no experience in web development. So AI was used to help with the start of the development. Other coding was AntEs work.</p>");
    win.document.close();
    win.document.body.style.backgroundColor = "black";
    win.document.body.style.color = "yellow";   
    win.document.body.style.fontFamily = "Times New Roman, sans-serif";
    win.document.body.style.fontSize = "35px";
    win.document.body.style.textAlign = "left";
}
const audio = document.getElementById("audio");
const playButton = document.getElementById("Play");

if (audio && playButton) {
    playButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play().then(function() {
                playButton.textContent = "Pause";
            }).catch(function() {
                audio.load();
                audio.play().then(function() {
                    playButton.textContent = "Pause";
                });
            });
        } else {
            audio.pause();
            playButton.textContent = "Play";
        }
    });
}