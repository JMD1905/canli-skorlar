const alan = document.getElementById("maclar");

// DEMO CANLI SİSTEM (garanti çalışır)
let maclar = [
  { lig: "Süper Lig", ev: "Galatasaray", dep: "Fenerbahçe", skor: "2 - 1", durum: "Canlı" },
  { lig: "Süper Lig", ev: "Beşiktaş", dep: "Trabzonspor", skor: "1 - 1", durum: "Devre Arası" },
  { lig: "Premier Lig", ev: "Arsenal", dep: "Chelsea", skor: "3 - 2", durum: "Canlı" }
];

function render() {
  alan.innerHTML = "";

  maclar.forEach(m => {
    const div = document.createElement("div");
    div.className = "mac";

    div.innerHTML = `
      <h3>${m.lig}</h3>
      <p><b>${m.ev}</b> ${m.skor} <b>${m.dep}</b></p>
      <small>${m.durum}</small>
    `;

    alan.appendChild(div);
  });
}

render();
