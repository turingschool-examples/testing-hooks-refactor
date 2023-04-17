const expect = require('chai').expect;

const {createRocket, loadAstronauts, lightThisCandle, fillFuelTanks} = require('../rocket.js');

describe('Initial setup of rocket', function() {
  it('Does not have a name', function() {
    let rocket = createRocket();

    expect(rocket.name).to.equal('');
  });

  it('Has fuel tanks that are empty', function() {
    let rocket = createRocket();

    expect(rocket.fuel).to.equal('empty');
  });

  it('There are no astronauts initially', function() {
    let rocket = createRocket();

    expect(rocket.astronauts).to.deep.equal([]);
  });

  it('The engines are not ignited', function() {
    let rocket = createRocket();

    expect(rocket.enginesIgnited).to.equal(false);
  });

  it('The cargo doors are closed and there is no cargo', function() {
    let rocket = createRocket();

    expect(rocket.cargoDoors).to.equal('closed');
    expect(rocket.cargo).to.deep.equal([]);
  });  
});


describe('Functionality of rocket', function() {
  it('Should be able to load astronauts', function() {
    let rocket = createRocket();

    rocket = loadAstronaut(rocket, 'Alan Shepard');

    expect(rocket.astronauts).to.deep.equal(['Alan Shepard']);
  });

  it('Should be able to ignite the engines', function() {
    let rocket = createRocket();

    rocket = lightThisCandle();

    expect(rocket.enginesIgnited).to.equal(true);
  });

  it('Should be able to fill the fuel tanks', function() {
    //Finish this test, then write implementation code to pass all tests.  
    //Then implement beforeEach hook to DRY up test file
  });

});