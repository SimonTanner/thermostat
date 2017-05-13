(function() {
  'use strict';


  $(document).ready(function() {



    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3563f610ac38d0804cb3927c3d2885e6&units=metric', function(data) {
      var weather = data;
      $('#Location').text(weather.name + ', ');
      $('#Weather').text(weather.weather['0'].description + ', ');
      $('#ExtTemp').text(weather.main.temp);
    });

    var thermostat = new Thermostat();
    var PS;
    if (thermostat.PowerSaving) {
      PS = 'ON';
    } else {
      PS = 'OFF';
    }
    $('#PowerSaving').text(PS);
    UpdateTemp();

    $('#up').click(function() {
      thermostat.UpTemp();
      UpdateTemp();
    });
    $('#down').click(function() {
      thermostat.DownTemp();
      UpdateTemp();
    });
    $('#PSOn').click(function() {
      thermostat.PowerSavingOn();
      PS = 'ON';
      $('#PowerSaving').text(PS);
    });
    $('#PSOff').click(function() {
      thermostat.PowerSavingOff();
      PS = 'OFF';
      $('#PowerSaving').text(PS);
    });
    $('#reset').click(function() {
      thermostat.Reset();
      UpdateTemp();
    });
    function UpdateTemp() {
      $('#temperature').text(thermostat.temperature);
      $('#temperature').attr('class', thermostat.Usage());
    }
  });
}());
