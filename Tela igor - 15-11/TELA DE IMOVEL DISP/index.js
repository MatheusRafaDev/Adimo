index.js


document.getElementById('property-form').addEventListener('submit', function(e) {
  e.preventDefault();

  var endereco = document.getElementById('end').value;
  var tipo = document.getElementById('tipo').value;
  var quartos = document.getElementById('quartos').value;
  var garagem = document.getElementById('garagem').value;

  var propriedade = {
    endereco: endereco,
    tipo: tipo,
    quartos: quartos,
    garagem: garagem
  };

  addProperty(propriedade);
});

function addProperty(propriedade) {
  var propriedadeList = document.querySelector('#property-form table tbody');

  var row = document.createElement('tr');

  var enderecoCell = document.createElement('td');
  enderecoCell.textContent = propriedade.endereco;
  row.appendChild(enderecoCell);

  var tipoCell = document.createElement('td');
  tipoCell.textContent = propriedade.tipo;
  row.appendChild(tipoCell);

  var quartosCell = document.createElement('td');
  quartosCell.textContent = propriedade.quartos;
  row.appendChild(quartosCell);

  var garagemCell = document.createElement('td');
  garagemCell.textContent = propriedade.garagem;
  row.appendChild(garagemCell);

  propriedadeList.appendChild(row);
}
