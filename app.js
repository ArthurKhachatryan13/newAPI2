const img = document.querySelector("img");
const button = document.querySelector("btn");
const url = "api.openweathermap.org/data/2.5/weather?q={Yerevan}&appid={1adb742efca3aa8bb10181573a034cf3}"
async function getWeather(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    } catch(error) {
console.log(error)
    }
}

getWeather();