var makeJumpingDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class="dancer anna"></span>');
  this.setPosition(top, left);

};

makeJumpingDancer.prototype = Object.create(makeDancer.prototype);
makeJumpingDancer.prototype.constructor = makeJumpingDancer;
makeJumpingDancer.prototype.step = function () {
  this.oldStep();

  this.$node.animate({'left': '+=250'}, 2000);
  this.$node.animate({'left': '-=250'}, 1000);

  //var moveLeft = true;
  

  // if (moveLeft) {
  //    moveLeft = false;
  // } else {
  //   this.$node.style.right += 50;
  //   moveLeft = true;
  // }
  // this.$node.toggle().effect('shake');
};