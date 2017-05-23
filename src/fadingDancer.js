var makeFadingDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer elsa"></span>');
  this.setPosition(top, left);

};

makeFadingDancer.prototype = Object.create(makeDancer.prototype);
makeFadingDancer.prototype.constructor = makeFadingDancer;
makeFadingDancer.prototype.step = function () {
  this.oldStep();
  this.$node.fadeToggle('slow');
};