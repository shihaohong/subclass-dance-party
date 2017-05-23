var makeJumpingDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer anna"></span>');
  this.setPosition(top, left);

};

makeJumpingDancer.prototype = Object.create(makeDancer.prototype);
makeJumpingDancer.prototype.constructor = makeJumpingDancer;
makeJumpingDancer.prototype.step = function () {
  this.oldStep();

  this.$node.animate({'top': '-=250'}, 50);
  this.$node.animate({'top': '+=250'}, 50);
};