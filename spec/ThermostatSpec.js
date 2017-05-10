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

});
