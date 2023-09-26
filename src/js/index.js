// OpenWeather API Key
const apiKey = "9f313b2340e5a8cd06b85725671204d1";

function mostrarTemperaturaCidade(apiCall) {
    // Mostra a cidade que foi digitada pelo usuario
    const cidade = document.getElementById("cidade");
    cidade.innerHTML = "Tempo em " + apiCall.name;
    
    // Busca a temperatura
    const temperatura = document.getElementById("temperatura");
    temperatura.innerHTML = Math.floor(apiCall.main.temp) + "° C";
    
    // Busca a imagem de acordo com o clima
    const imagemClima = document.getElementById("imagem-clima");
    imagemClima.src = `https://openweathermap.org/img/wn/${apiCall.weather[0].icon}.png`;
    
    // Busca o clima
    const clima = document.getElementById("clima");
    clima.innerHTML = apiCall.weather[0].description;
    
    // Busca a umidade
    const umidade = document.getElementById("umidade");
    umidade.innerHTML = "Umidade: " + apiCall.main.humidity + "%";
}

// Faz a chamada da API e passa por parametro a função de buscar cidade
async function buscarCidade(inputCidade) {
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCidade}&appid=${apiKey}&lang=pt_br&units=metric`).then(response => response.json());
    mostrarTemperaturaCidade(apiCall);
}

// Botão para buscar as informações da temperatura na API através da função buscar cidade
function cliqueBotaoBuscar() {
    // Busca o nome da cidade digitado pelo usuario
    const inputCidade = document.getElementById("input-cidade").value.trim();
    // Verificação do valor digitado pelo usuario que não permite o campo vazio ou números
    if (inputCidade === "" || !isNaN(inputCidade)) {
        alert("Erro: O campo de entrada está vazio ou contém um número.");
    } else {
        buscarCidade(inputCidade);
    }
}
