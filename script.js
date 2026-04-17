const maclar = [
{ takim1: "Galatasaray", takim2: "Fenerbahçe", skor: "2-1" },
{ takim1: "Beşiktaş", takim2: "Trabzonspor", skor: "1-1" }
];

const alan = document.getElementById("maclar");

maclar.forEach(mac => {
const div = document.createElement("div");
div.className = "mac";
div.innerHTML = `${mac.takim1} ${mac.skor} ${mac.takim2}`;
alan.appendChild(div);
});
