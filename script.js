const prestadores = [
  {
    nome: "Maria",
    servico: "Faxina",
    bairro: "Centro",
    whatsapp: "5551999999999",
    disponivel: true
  },
  {
    nome: "João",
    servico: "Pedreiro",
    bairro: "Bairro X",
    whatsapp: "5551988888888",
    disponivel: true
  }
];

const lista = document.getElementById("listaPrestadores");
const filtro = document.getElementById("servicoFiltro");

function render(listaFiltrada) {
  lista.innerHTML = "";
  listaFiltrada.forEach(p => {
    if (!p.disponivel) return;
    lista.innerHTML += `
      <div class="card">
        <h3>${p.nome}</h3>
        <p>${p.servico} • ${p.bairro}</p>
        <a class="whatsapp" href="https://wa.me/${p.whatsapp}" target="_blank">
          Chamar no WhatsApp
        </a>
      </div>
    `;
  });
}

filtro.addEventListener("change", () => {
  const valor = filtro.value;
  const filtrados = valor
    ? prestadores.filter(p => p.servico === valor)
    : prestadores;
  render(filtrados);
});

render(prestadores);
