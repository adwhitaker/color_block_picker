$(document).ready(function () {
// random number function
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

// array of possible colors
  var colorArray = ['red', 'yellow', 'green', 'blue', 'purple', 'orange', 'maroon']
  var arrayOfColors = [];
  var howManyColors = 0;
  var success = '';
  var randomNum = 0;
  var getRandomColor = '';
  var colorArray2 = [];
// var

// funtion to create a random array of colors based on the colorArray
  function randomArray () {
    // this creates a second array that is equal to colorArray
    // I use this to splice colors from it to create the random array for which will be appended to the DOM
    for (var i = 0; i < colorArray.length; i++) {
      colorArray2[i] = colorArray[i];
    }
    // arraryOfColors is used to create the random array
    arrayOfColors = [];
    howManyColors = 5;
    var addColor = randomNumber(1, howManyColors) - 1;
// loop to go through the new array of colors and create another array to be printed on the DOM
    for (var i = 0; i < howManyColors; i++) {
      addColor = randomNumber(1, colorArray2.length) - 1;
      var colorSlice = colorArray2.splice(addColor, 1);
      if (colorSlice === []) {
      	colorSlice = arrayOfColors[0];
      }
      arrayOfColors.push(colorSlice);
    }
  }

// this adds the random color name to the DOM. This is the color to click on

  function randomColor() {
    randomNum = randomNumber(1, howManyColors);
    var color = arrayOfColors[randomNum - 1];
    $('#color').text(color);
    $('#color').css('color', color);
    getRandomColor = arrayOfColors[randomNum - 1]
    console.log('arrayOfColors', getRandomColor);
  }

// a for loop to append the colors to the DOM
  function addColorToDOM () {
    for (var i = 0; i < howManyColors; i++) {
      $('.boxes').append('<div class="box" id="' + arrayOfColors[i] + '"></div>');
    }
  }

  randomArray();
  randomColor();
  addColorToDOM();
  console.log(arrayOfColors);

// this checks if the box that is clicked on is equal to the random number and prints answer to DOM
  $('.boxes').on('click', '.box', function () {
    var $clickedBox = $(this);
    console.log('$clickedBox', $clickedBox);
    if ( $clickedBox.is('#' + getRandomColor) ) {
      $(this).css('background-color', 'pink');
      $(this).css('border','limegreen solid 2px');
      success = 'Congrats!!! Click New Game';
      $('#answer').text(success);

// 2 second delay once the square is clicked
      delayedSuccess()

      function delayedSuccess() {
        window.setTimeout(successChange, 2000);
      }
      function successChange() {
        $clickedBox.css('background-color', getRandomColor);

      }
// else statement - try again
    } else {
      success = 'Failure. Try Again.'
      $('#answer').text(success);
      $(this).fadeOut('slow');
    }
  })

// new game button listener
  $('button').on('click', function () {
    $('.box').remove();
    randomArray();
    randomColor();
    addColorToDOM();
    $('#answer').text('Did you win?')
  })
})
