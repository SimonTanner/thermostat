function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.UpTemp = function() {
  this.temperature ++;
};

Thermostat.prototype.DownTemp = function() {
  this.temperature --;
};
