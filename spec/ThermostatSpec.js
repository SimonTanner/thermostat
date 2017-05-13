describe ('Thermostat',function(){

  var thermostat;

  beforeEach(function(){

   thermostat = new Thermostat();

  });

  it('starts at 20 degress',function(){
    expect(thermostat.temperature).toBe(20);
  });

  it('Up function can increase the temperature', function() {
    thermostat.UpTemp();
    expect(thermostat.temperature).toBe(21);
  });

  it('Down function can decrease the temperature', function() {
    thermostat.DownTemp();
    expect(thermostat.temperature).toBe(19);
  });

  it('Temperature cannot decrease below 10 degrees', function() {
    for (var i = 0; i <= 11; i++) {
      thermostat.DownTemp();
    }
    expect(thermostat.temperature).toBe(10);
  });

  it('If user tries to decrease the temperature below 10 degrees it returns an error msg', function() {
    for (var i = 0; i <= 11; i++) {
      thermostat.DownTemp();
    }
    expect(thermostat.DownTemp()).toBe('You cannot go below 10 degrees');
  });

  it('PowerSaving mode is on by default', function(){
    expect(thermostat.PowerSaving).toBe(true);
  });

  it('cannot increase temp above 25 if powersaving mode is on', function(){
    for (var i = 0; i <= 6; i++) {
      thermostat.UpTemp();
    }
    expect(thermostat.temperature).toBe(25);
  });

  it('Cannot increase the temperature above 32 if powersaving is off', function(){
    thermostat.PowerSavingOff();
    for (var i = 0; i <= 12; i++) {
      thermostat.UpTemp();
    }
    expect(thermostat.temperature).toBe(32);
  });

  it('If PowerSaving is turned off and on again the max temp is 25', function() {
    thermostat.PowerSavingOff();
    thermostat.PowerSavingOn();
    expect (thermostat.MaxTemp).toBe(25);
  });

  it('can reset temp to 20 by using reset feature', function(){
    thermostat.UpTemp();
    thermostat.Reset();
    expect(thermostat.temperature).toBe(20);
  });

  describe('Usage', function() {
    it('returns low-usage if the temperature is below 18 degrees', function() {
      for (i=1; i<=3; i++) {
        thermostat.DownTemp();
      }
      expect(thermostat.Usage()).toBe('low-usage');
    });
    it('returns medium-usage if the temperature is between 18 & 25 degrees', function() {
      expect(thermostat.Usage()).toBe('medium-usage');
    });

    it('returns high-usage if the temperature is 25 degrees or above', function() {
      for (i=1; i<=5; i++) {
        thermostat.UpTemp();
      }
      expect(thermostat.Usage()).toBe('high-usage');
    });
  });

});
