import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js'

function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
  $('.showWind').text("");
  $('.showClouds').text("");
}

//async & await
function getElements(response) {
  if(response.main) {
    $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in fahrenheit is ${response.main.temp} degrees`);
    $('.showWind').text(`The wind is ${response.wind.speed} mph`);
    $('.showClouds').text(`Cloudiness is ${response.clouds.all}%`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

// async function makeApiCall(city) {
//   const response = await WeatherService.getWeather(city);
//   getElements(response);
// }


// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     clearFields();
//     makeApiCall(city);
//     });
//   });


  // Immediately-invoked function expression (IIFE)
  // cleaner code, helps protect data privacy

  $(document).ready(function() {
    $('#weatherLocation').click(function() {
      let city = $('#location').val();
      clearFields();
      (async function() {
        const response = await WeatherService.getWeather(city);
        getElements(response);
      })();  
    });
  });


//-------------------------------------------------------------------------------------------------

//fetch

// function getElements(response) {
//   if(response.main) {
//     $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
//     $('.showTemp').text(`The temperature in fahrenheit is ${response.main.temp} degrees`);
//     $('.showWind').text(`The wind is ${response.wind.speed} mph`);
//     $('.showClouds').text(`Cloudiness is ${response.clouds.all}%`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// }


// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     clearFields();
//     WeatherService.getWeather(city)
//       .then(function(response) {
//         getElements(response);
//     });
//   });
// });


//-------------------------------------------------------------------------------------------------

//promise 

// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     clearFields();
//     let promise = WeatherService.getWeather(city);
//     promise.then(function(response) {
//       const body = JSON.parse(response);
//       $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//       $('.showTemp').text(`The temperature in fahrenheit is ${body.main.temp} degrees.`);
//       $('.showWind').text(`The wind is ${body.wind.speed} mph`);
//       $('.showClouds').text(`Cloudiness is ${body.clouds.all}%`);
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error}`);
//     });
//   });
// });

//-------------------------------------------------------------------------------------------------

//es6 way of writing a function

// WeatherService.getWeather(city)
//       .then(response => {
//         getElements(response);
//     });