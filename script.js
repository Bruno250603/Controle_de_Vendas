const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const cliente = document.querySelector('#cliente').value;
  const produto = document.querySelector('#produto').value;
  const quantidade = document.querySelector('#quantidade').value;
  const valor = document.querySelector('#valor').value;

  const total = quantidade * valor;

  resultado.innerHTML = `<p>Cliente: ${cliente}</p>
                         <p>Produto: ${produto}</p>
                         <p>Quantidade: ${quantidade}</p>
                         <p>Valor unitário: R$ ${valor}</p>
                         <p>Total: R$ ${total.toFixed(2)}</p>`;
});
