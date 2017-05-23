$(document).ready(function() {
  window.dancers = [];

  var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

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

  
  // two column button
  // take first half of dancers and line up equally on left side
  // take second half of dancers and line up equally on right side
  // 

  $('.triForm').on('click', function(event) {
    var dancers = $('.dancer');
    var posHeight = $(window).height() - 100;
    var posLeft = 100;
    
    var doIt = 0;
    for (let i = 0; i < dancers.length / 2; i++) {
      posLeft = posLeft + 50;
      posHeight = posHeight - 50;
      dancers[i].style.left = posLeft + 'px';
      dancers[i].style.top = posHeight + 'px';
    }

    var posHeight2 = $(window).height() - 100;
    var posLeft2 = $(window).width() - 100;
    var secondHalf = Math.floor(dancers.length / 2);

    for (let i = secondHalf; i < dancers.length; i++) {
      console.log(i);
      posLeft2 = posLeft2 - 50;
      posHeight2 = posHeight2 - 50;
      dancers[i].style.left = posLeft2 + 'px';
      dancers[i].style.top = posHeight2 + 'px';
    }  
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
