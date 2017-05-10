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

});
