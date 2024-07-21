

let randomChosenColor=random();
switchSound(randomChosenColor);

let gamePattern = [];
let userClickedPattern = [];
let level = 0;
gamePattern.push(randomChosenColor);
console.log(gamePattern);




$(".btn").click(function (event) {
  let userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  
  switchSound(userChosenColor);
  
  return userClickedPattern;
  
  
});



function switchSound(key) {
  switch (key) {
    case "green":
      var greenTune = new Audio("./sounds/green.mp3");
      greenTune.play();
      $("#green").fadeOut(100).fadeIn(100);
      break;
  
    case "red":
      var redTune = new Audio("./sounds/red.mp3");
      redTune.play();
      $("#red").fadeOut(100).fadeIn(100);
      break;
  
    case "yellow":
      var yellowTune = new Audio("./sounds/yellow.mp3");
      yellowTune.play();
      $("#yellow").fadeOut(100).fadeIn(100);
      break;
  
    case "blue":
      var blueTune = new Audio("./sounds/blue.mp3");
      blueTune.play();
      $("#blue").fadeOut(100).fadeIn(100);
      break;

  

    default:
      console.log(key);
      break;
  }

}

function random() {
  
  let randomNum = Math.floor(Math.random() * 4);
  console.log(randomNum);
  let buttonColors = ["red", "blue", "green", "yellow"];
  let randomChosenColor = buttonColors[randomNum];
  return randomChosenColor;
}








