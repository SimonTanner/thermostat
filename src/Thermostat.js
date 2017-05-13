function Thermostat() {
  this.temperature = 20;
  this.MinTemp = 10;
  this.PowerSaving = true;
  this.MaxTemp = 25;
}


Thermostat.prototype.PowerSavingOff = function() {
  this.PowerSaving = false;
  this.MaxTemp = 32;
};

Thermostat.prototype.PowerSavingOn = function() {
  this.PowerSaving = true;
  this.MaxTemp = 25;
};

Thermostat.prototype.UpTemp = function() {
  if (this.temperature < this.MaxTemp) {
    this.temperature ++;
  }
  else {
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

Thermostat.prototype.Reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.Usage = function() {
  if (this.temperature < 18) {
    return 'low-usage';
  } else if (this.temperature < 25) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
