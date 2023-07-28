const API_KEY = `d2ac5f3dc5f6dd787e6652ac7e17ce88`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));

    // Clear the input field
    document.getElementById('city-name').value = '';
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    // console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);

    // Set weather icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}
