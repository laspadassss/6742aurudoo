const eventos = [
  {
    ano: "1511",
    titulo: "O sermão de Montesinos",
    texto: "Em Santo Domingo, o frade dominicano Antonio de Montesinos condena em público a escravidão e os maus-tratos aos indígenas e pergunta se eles não são seres humanos. É o primeiro grande protesto da Igreja contra os abusos da conquista.",
    quem: "Antonio de Montesinos, dominicano"
  },
  {
    ano: "1512",
    titulo: "Leis de Burgos",
    texto: "A Coroa espanhola cria as primeiras normas para regular a encomenda, limitando o trabalho e exigindo instrução cristã. Pouco foi cumprido nas colônias, mas a discussão sobre os direitos dos indígenas passa a existir na lei.",
    quem: "Coroa de Castela"
  },
  {
    ano: "1537",
    titulo: "Bula Sublimis Deus",
    texto: "O papa Paulo III declara que os indígenas são pessoas verdadeiras, capazes de receber a fé, e que não devem ser privados de liberdade nem de seus bens, mesmo que ainda não sejam cristãos.",
    quem: "Papa Paulo III"
  },
  {
    ano: "1539",
    titulo: "As lições de Vitoria",
    texto: "Em Salamanca, o teólogo Francisco de Vitoria ensina que os indígenas têm domínio legítimo sobre suas terras e seu governo. Suas ideias influenciam o debate sobre direitos entre os povos.",
    quem: "Francisco de Vitoria, dominicano"
  },
  {
    ano: "1542",
    titulo: "As Leis Novas",
    texto: "Carlos V assina as Leis Novas das Índias: proíbem a escravização de indígenas, limitam a encomenda e acabam com sua herança. Las Casas escreve neste ano a Brevíssima relação da destruição das Índias, publicada em 1552.",
    quem: "Carlos V, com o apoio de Las Casas"
  },
  {
    ano: "1545",
    titulo: "Recuo da Coroa",
    texto: "Diante da rebelião dos colonos, sobretudo no Peru, o rei revoga o artigo que acabava com a herança das encomendas. As demais normas continuam, mas com aplicação irregular.",
    quem: "Coroa espanhola"
  },
  {
    ano: "1550",
    titulo: "O debate de Valladolid",
    texto: "Las Casas e o humanista Juan Ginés de Sepúlveda debatem se a conquista era justa e se os indígenas podiam ser submetidos à força. É uma das primeiras grandes discussões europeias sobre os direitos de outros povos.",
    quem: "Bartolomé de las Casas e Juan Ginés de Sepúlveda"
  }
];

const botoes = document.getElementById("years");
const painel = document.getElementById("panel");
const titulo = document.getElementById("panel-title");
const texto = document.getElementById("panel-text");
const quem = document.getElementById("panel-who");

eventos.sort((a, b) => Number(a.ano) - Number(b.ano));

function mostrar(indice) {
  const e = eventos[indice];
  titulo.textContent = e.ano + ": " + e.titulo;
  texto.textContent = e.texto;
  quem.textContent = e.quem;

  botoes.querySelectorAll("button").forEach((b, i) => {
    b.setAttribute("aria-selected", i === indice ? "true" : "false");
  });

  painel.classList.remove("troca");
  void painel.offsetWidth;
  painel.classList.add("troca");
}

eventos.forEach((e, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.setAttribute("role", "tab");
  b.textContent = e.ano;
  b.addEventListener("click", () => mostrar(i));
  botoes.appendChild(b);
});

mostrar(eventos.findIndex((e) => e.ano === "1542"));
