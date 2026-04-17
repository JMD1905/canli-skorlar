const alan = document.getElementById("maclar");

async function veriCek() {
    try {
        const response = await fetch("https://www.thesportsdb.com/api/v1/json/3/livescore.php?l=4328");
        const data = await response.json();

        alan.innerHTML = "";

        if (!data.events) {
            alan.innerHTML = "<p>Şu an canlı maç yok</p>";
            return;
        }

        data.events.forEach(mac => {
            const div = document.createElement("div");
            div.className = "mac";

            div.innerHTML = `
                <h3>${mac.strLeague}</h3>
                <p><b>${mac.strHomeTeam}</b> ${mac.intHomeScore} - ${mac.intAwayScore} <b>${mac.strAwayTeam}</b></p>
                <small>⏱ ${mac.strTimestamp || "Canlı"}</small>
            `;

            alan.appendChild(div);
        });

    } catch (error) {
        alan.innerHTML = "<p>Veri çekilemedi</p>";
    }
}

veriCek();
setInterval(veriCek, 30000);
