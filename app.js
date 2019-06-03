const request = require('request')
const argv = require('yargs').argv

let apiKey = '006c88f90e6071a7d594e894e8684109'
let city = argv.a || 'Pune';
let url =  `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

request(url , function(err , res , body){
    if(err){
        console.log('Error' , err);
    } else {
       let weather = JSON.parse(body)
        console.log(`${weather.name},${weather.sys.country} -- ${weather.main.temp} Degrees`);
    }
})