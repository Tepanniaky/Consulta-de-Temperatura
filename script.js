function buscarTempo() {
    var cidade = document.getElementById('cep').value.trim();

    if (cidade === '') {
        alert('Campo cidade não pode estar em branco.');
        return;
    }

    var url = `https://api.weatherapi.com/v1/current.json?key=6497b713d50d4832871221307252804&q=${encodeURIComponent(cidade)}&lang=pt`;

    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Cidade não encontrada.");
            }
            return response.json();
        })
        .then(function(data) {
            document.getElementById('resultado').style.display = 'block';
            document.getElementById('logradouro').textContent = data.location.name;
            document.getElementById('Temperatura').textContent = data.current.temp_c + ' °C';
            document.getElementById('regiao').textContent = data.location.region;
            document.getElementById('Tempo').textContent = data.current.condition.text;
            document.getElementById('Vento').textContent = data.current.wind_kph + ' KM/H';
        })
        .catch(function(error) {
            alert('Erro: ' + error.message);
        });
}
