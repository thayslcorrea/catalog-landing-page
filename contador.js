function calcularDiasRestantes(dataFinal) {
  const hoje = new Date();
  const dataLimite = new Date(dataFinal);
  const diffTime = dataLimite.getTime() - hoje.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function exibirContador() {
  const dataFinal = '2025-12-31'; // Data final prevista do projeto
  const diasRestantes = calcularDiasRestantes(dataFinal);
  const contadorElemento = document.getElementById('contador-dias');
  if (contadorElemento) {
    contadorElemento.textContent = diasRestantes.toString();
  }
}

exibirContador();
