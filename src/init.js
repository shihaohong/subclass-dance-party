$(document).ready(function() {
  window.dancers = [];

  var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  $('.addElsa').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var time = getRandomInt(1000, 1500);

    var dancer = new dancerMakerFunction(
      $('body').height() / 2 * Math.random() + $('body').height() / 3 + 50,
      $('body').width() * 0.8 * Math.random() + 125,
      time
    );

    $('body').append(dancer.$node);
  });

  $('.addAnna').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var time = getRandomInt(1000, 1500);

    var dancer = new dancerMakerFunction(
      $('body').height() / 2 * Math.random() + $('body').height() / 3 + 50,
      $('body').width() * 0.8 * Math.random() + 125,
      time
    );

    $('body').append(dancer.$node);
  });

  $('.addOlaf').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var time = getRandomInt(1000, 1500);

    var dancer = new dancerMakerFunction(
      $('body').height() / 2 * Math.random() + $('body').height() / 3 + 50,
      $('body').width() * 0.8 * Math.random() + 125,
      time
    );

    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    var dancers = $('.dancer');
    var height = $(window).height() * 2 / 3;
    var width = ($(window).width() - 200) / dancers.length;
    var postNum = 0;

    $( '.dancer' ).each(function() {
      postNum = postNum + width;
      this.style.left = postNum + 'px';
      this.style.top = height + 'px';
    });
  });

  $('.shakeEmUpButton').on('click', function(event) {
    var dancers = $('.dancer');

    $( '.dancer' ).each(function() {
      var randWidth = $('body').width() * 0.8 * Math.random() + 125;
      var randHeight = $('body').height() / 2 * Math.random() + $('body').height() / 3 + 50;
      this.style.left = randWidth + 'px';
      this.style.top = randHeight + 'px';
    });
  });
});
/*
*/
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
