const maclar = [
    { lig: "Süper Lig", takim1: "Galatasaray", takim2: "Fenerbahçe", skor: "2 - 1", durum: "Canlı" },
    { lig: "Süper Lig", takim1: "Beşiktaş", takim2: "Trabzonspor", skor: "1 - 1", durum: "Devre Arası" },
    { lig: "Premier Lig", takim1: "Arsenal", takim2: "Chelsea", skor: "3 - 2", durum: "Canlı" }
];

const alan = document.getElementById("maclar");

function render() {
    alan.innerHTML = "";

    maclar.forEach(mac => {
        const div = document.createElement("div");
        div.className = "mac";

        div.innerHTML = `
            <h3>${mac.lig}</h3>
            <p><b>${mac.takim1}</b> ${mac.skor} <b>${mac.takim2}</b></p>
            <small>${mac.durum}</small>
        `;

        alan.appendChild(div);
    });
}

render();
