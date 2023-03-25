var btnArray = [];
var inputArray = [];
var level = 0;
var totalBtnClick = 0;
$(document).on("keypress", function(){
    if(level === 0){
      //alert("level" + level);
      randomBtnGenerator();
    }
  //  console.log("keypress totalBtnClick = "+totalBtnClick);

});
$(".btn").on("click",function(){
  inputArray.push(this.id);
  //alert("main" + this.id);
  pathCheck(this.id);
});
function randomBtnGenerator(){
  //alert("rndmbtngnrtr");
  var randomButton = Math.floor(Math.random()*4)+1;
  level++;
  totalBtnClick = 0;
  var heading = $("h1").text("Level " + level );
  buttonClick(randomButton,true);
}

function pathCheck(currentBtn){
//  alert("pathcheck");
  $("#"+currentBtn).addClass("pressed");
  addAudio(currentBtn);
  setTimeout(function(){
    $("#"+currentBtn).removeClass("pressed");
  },100);
  console.log(" path chaeck btnarry data = "+btnArray[totalBtnClick]);
  if(btnArray[totalBtnClick] !== currentBtn)
  {
      gameOver();
      return;
  }else{
    console.log("My name is sameeksha");
  totalBtnClick++;
  }
  if(btnArray.length<=totalBtnClick){
    setTimeout(function(){randomBtnGenerator();},1000);
  }
}

function gameOver(){
  //alert("gameover");
  addAudio("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
  $("h1").text("Game Over, Press Any Key to Restart");
  level = 0;
  btnArray = [];
  inputArray = [];
  totalBtnClick = 0;
//  console.log("btnArray length = " + btnArray.length + "last = "+btnArray[totalBtnClick]);
  //  console.log("inputArray length= " + inputArray.length);
    //  console.log("currentBtn = "+currentBtn);
      //  console.log("totalBtnClick = "+totalBtnClick);
}

function buttonClick(btn,isRandom){
//alert("btnclick");
  switch (btn) {
    case 1:
      $(".green").addClass("pressed");
      addAudio("green");
      setTimeout(function(){
      $(".green").removeClass("pressed");
      },100);
      if(isRandom){
        btnArray.push("green");
      }
    break;

    case 2:
        $(".red").addClass("pressed");
        addAudio("red");
        setTimeout(function(){
          $(".red").removeClass("pressed");
        },100);
        if(isRandom){
          btnArray.push("red");
        }
      break;

    case 3:
      $(".yellow").addClass("pressed");
      addAudio("yellow");
      setTimeout(function(){
        $(".yellow").removeClass("pressed");
      },100);
      if(isRandom){
        btnArray.push("yellow");
      }
    break;

    case 4:
      $(".blue").addClass("pressed");
      addAudio("blue");
      setTimeout(function(){
        $(".blue").removeClass("pressed");
      },100);
      if(isRandom){
        btnArray.push("blue");
      }
    break;

    default:
  }
}

function addAudio(sound){
  var soundName = new Audio("sounds/" + sound + ".mp3");
  soundName.play();
}
