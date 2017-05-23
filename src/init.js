$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    console.log(dancer.$node);

    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    var screenHeight = screen.height;
    var lineUpHorizontal = screenHeight / 3; // lines up a third of the way down from screen
    var screenWidth = screen.width;
    var dancers = document.getElementsByClassName('dancer');

    var distanceApart = (screenWidth - 200) / dancers.length;
    var posLeftNum = 0;
    for (let i = 0; i < dancers.length; i++) {
      posLeftNum = posLeftNum + distanceApart;
      posLeft = posLeftNum.toString();
      console.log(posLeftNum);
      posTop = lineUpHorizontal.toString();
      dancers[i].style.top = posTop + 'px';
      dancers[i].style.left = posLeft + 'px';
    }

  });

});
/*
$('.lineUpButton').on('click', function(event) {
  var height = $(document).height() / 3;
  var width = ($(document).width() - 200) / dancers.length;
  var postNum = 0;
  console.log(width);
  $( '.dancer' ).each(function() {
    postNum = postNum + width;
    this.style.top = postNum + 'px';
    this.style.left = $( document ).width() / 2 + 'px';
  });
});
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
