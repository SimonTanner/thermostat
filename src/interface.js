(function() {
  'use strict';
  $(document).ready(function() {
    var thermostat = new Thermostat();
    var PS;
    if (thermostat.PowerSaving) {
      PS = 'ON';
    } else {
      PS = 'OFF';
    }
    $('#PowerSaving').text(PS);
    $('#temperature').text(thermostat.temperature);
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
