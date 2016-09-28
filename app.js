$(document).ready(function () {
// array of possible colors
  var colorArray = ['red', 'yellow', 'green', 'blue', 'purple', 'orange']

//var howManyColors = prompt('How many colors would you like?', '5 possible')
  var howManyColors = 5;

// a for loop to append the colors to the DOM
  for (var i = 0; i < howManyColors; i++) {
    $('.boxes').append('<div class="box" id="' + colorArray[i] + '"></div>');
  }

// generates a random number based on how many colors chosen
  var randomNum = randomNumber(1, howManyColors);
  console.log(randomNum);

// this checks if the box that is clicked on is equal to the random number and prints answer to DOM
  var sucess = '';
  $('.box').on('click', function () {
    if ( $(this).is('#' + colorArray[randomNum - 1]) ) {
      sucess = 'Congrats!!!'
      $('#answer').text(sucess);
      randomNum = randomNumber(1, howManyColors);
    } else {
      sucess = 'Fail.'
      $('#answer').text(sucess);
    }
  })
})

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
