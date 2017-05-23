var makeFadingDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class="dancer elsa"></span>');
  this.setPosition(top, left);

};

makeFadingDancer.prototype = Object.create(makeDancer.prototype);
makeFadingDancer.prototype.constructor = makeFadingDancer;
makeFadingDancer.prototype.step = function () {
  this.oldStep();
  this.$node.fadeToggle();
  // this.$node.toggle().effect('shake');
};