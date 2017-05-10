function Thermostat() {
  this.temperature = 20;
  this.MinTemp = 10;
  this.PowerSaving = true;
  this.PowerSavingMaxTemp = 25;
}

Thermostat.prototype.UpTemp = function() {
  if (this.PowerSaving = true && this.temperature < this.PowerSavingMaxTemp) {
    this.temperature ++;  
  }
  else {
    return 'If Powersaving mode is on cannot increase temp above' + this.PowerSavingMaxTemp + 'degrees'
  }

};

Thermostat.prototype.DownTemp = function() {
  if ( this.temperature > this.MinTemp) {
    this.temperature --;
  }
  else {
    return 'You cannot go below ' + this.MinTemp + ' degrees';
  }
};
