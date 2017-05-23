describe('danceParty', function() {

  var blinkyDancer, fadingDancer, jumpingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
    fadingDancer = new makeFadingDancer(10, 20, timeBetweenSteps);
    jumpingDancer = new makeJumpingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object for all 3 dancer types', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
    expect(fadingDancer.$node).to.be.an.instanceof(jQuery);
    expect(jumpingDancer.$node).to.be.an.instanceof(jQuery);    
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('blinkyDancer', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('fadingDancer', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fadingDancer, 'step');
      expect(fadingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(fadingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fadingDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('jumpingDancer', function() {
    it('should call step at least once per second', function() {
      sinon.spy(jumpingDancer, 'step');
      expect(jumpingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(jumpingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(jumpingDancer.step.callCount).to.be.equal(2);
    });
  });
});