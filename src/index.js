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
    $('.showWind').val("");
    $('.showClouds').val("");
}

  $(document).ready(function() {
    $('#weatherLocation').click(function() {
      let city = $('#location').val();
      clearFields();
      let promise = WeatherService.getWeather(city);
      promise.then(function(response) {
        const body = JSON.parse(response);
        $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
        $('.showTemp').text(`The temperature in Fahrenheit is ${response.main.temp} degrees.`);
        $('.showWind').text(`The wind is ${response.wind.speed} mph`);
        $('.showClouds').text(`Cloudiness is ${response.clouds.all}%`);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error}`);
      });
    });
  });