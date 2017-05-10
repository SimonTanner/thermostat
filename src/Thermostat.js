function Thermostat() {
  this.temperature = 20;
  this.MinTemp = 10;
}

Thermostat.prototype.UpTemp = function() {
  this.temperature ++;
};

Thermostat.prototype.DownTemp = function() {
  if ( this.temperature > this.MinTemp) {
    this.temperature --;
  }
  else {
    return 'You cannot go below ' + this.MinTemp + ' degrees';
  }
};
