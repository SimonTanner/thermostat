(function() {
  'use strict';
  $(document).ready(function() {
    var thermostat = new Thermostat();
    $('#temperature').text(thermostat.temperature);
    $('#up').click(function() {
      thermostat.UpTemp();
      $('#temperature').text(thermostat.temperature);
    });
    $('#down').click(function() {
      thermostat.DownTemp();
      $('#temperature').text(thermostat.temperature);
    });
    $('#PSOn').click(function() {
      thermostat.PowerSavingOn();
    });
    $('#PSoff').click(function() {
      thermostat.PowerSavingOff();
    });
    $('#reset').click(function() {
      thermostat.Reset();
      $('#temperature').text(thermostat.temperature);
    });
  });
}());
