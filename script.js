document.querySelector('.busca').addEventListener('submit', (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value

    if (input == '') {
        showWarning('Carregando...');


        // let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid={02a435a0ad3bfa3e999b88f2c954f0ae}&units=metric&lang=pt_br`

        // let results = await fetch(url);

        // let json = await results.json();

        // console.log(json);
    }

});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

