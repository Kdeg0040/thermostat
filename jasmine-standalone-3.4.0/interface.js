$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  })

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  $('#current-city').change(function() {
    displayWeather();
  })

  function displayWeather() {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var city = $('#current-city').val();
    var token = '&appid=3658356c0ec42de64979f3b8318daf45';
    var units = '&units=metric';
    $.get(url + city + token + units, function(data) {
      $('#current-temperature').text(Math.round(data.main.temp))
    })
  }

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
})
