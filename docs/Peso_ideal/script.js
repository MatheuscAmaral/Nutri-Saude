const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const sexo = document.getElementById("sexo").value;
  const years = document.getElementById("years").value;
  const height = document.getElementById("height").value;

  document.getElementById("answer").classList.remove("hidden");

  let answer = "";

  const pesoIdeal = {

    Masculino: {
      "20-29": { 150: 51.3, 152: 53.1, 154: 55.3},
      "30-39": { 150: 56.7, 152: 58.7, 154: 61.6},
      "40-49": { 150: 58.1, 152: 61.5, 154: 64.5},
      "50-59": { 150: 58, 152: 61, 154: 63.8},
      "60-69": { 150: 57.3, 152: 60.3, 154: 61.9},
    },

    Feminino: {
      "20-29": { 150: 48.9, 152: 51, 154: 53},
      "30-39": { 150: 53.9, 152: 55, 154: 59.1},
      "40-49": { 150: 58.5, 152: 59.5, 154: 62.4},
      "50-59": { 150: 55.7, 152: 57.6, 154: 60.2},
      "60-69": { 150: 54.8, 152: 55.9, 154: 59 },
    },
  };

  // Verificar o peso ideal com base nos valores fornecidos
  const idadeRange = getAgeRange(years);
  const peso = pesoIdeal[sexo]?.[idadeRange]?.[height];

  // Verificar se o peso foi encontrado
  if (peso !== undefined) {
    answer = `Seu peso ideal é igual a ${peso}kg`;
  } 
  else {
    answer = "Não foi possível determinar o peso ideal para os valores fornecidos";
  }

  // Função para obter a faixa de idade com base no ano de nascimento
  function getAgeRange(years) {
    if (years >= 20 && years <= 29) {
      return "20-29";
    } 
    else if (years >= 30 && years <= 39) {
      return "30-39";
    } 
    else if (years >= 40 && years <= 49) {
      return "40-49";
    } 
    else if (years >= 50 && years <= 59) {
      return "50-59";
    } 
    else if (years >= 60 && years <= 69) {
      return "60-69";
    } 
    else {
      return "";
    }
  }

  document.getElementById("answer").textContent = answer;
});
