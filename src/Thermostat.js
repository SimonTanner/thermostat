function Thermostat() {
  this.temperature = 20;
  this.MinTemp = 10;
  this.PowerSaving = true;
  if (this.PowerSaving = true) {
    this.MaxTemp = 25;
  }
  else {
    this.MaxTemp = 32;
  }

  
}

Thermostat.prototype.UpTemp = function() {
  if (this.temperature < this.MaxTemp) {
    this.temperature ++;
  }
  else{
    return 'You cannot increase temperature above ' + this.MaxTemp + ' degrees';
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
