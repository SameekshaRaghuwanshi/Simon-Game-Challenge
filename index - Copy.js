// keypress- yes- change heading to lvl 1 -random button click-and button sound-store button in an btnarray
//-if input is same button click-turn heading to 2 and click on more button and push it into the btnarry



var btnArray = [];
var inputArray = [];
var level = 0;
var totalBtnClick = 0;
$(document).on("keypress", function(){
  //var randomButton = Math.floor(Math.random()*4)+1;
//  var heading = $("h1").text("Level 1");
//  buttonClick(randomButton,true);
//  btnArray.push(randomButton);
    if(level === 0){
      randomBtnGenerator();
    }

    //console.log("keypress btnArray length = " + btnArray.length + "last = "+btnArray[totalBtnClick]);
      //console.log("keypress inputArray length= " + inputArray.length);
      //  console.log("currentBtn = "+currentBtn);
          console.log("keypress totalBtnClick = "+totalBtnClick);


    $(".btn").on("click",function(){
      //console.log(this.id);
      inputArray.push(this.id);
      pathCheck(this.id);

      //  alert(inputArray.length + "inputArray Length");

  });
});

function randomBtnGenerator(){
  var randomButton = Math.floor(Math.random()*4)+1;
  level++;
  totalBtnClick = 0;
  var heading = $("h1").text("Level " + level );
  buttonClick(randomButton,true);
  //btnArray.push(randomButton);
//  alert(btnArray.length);
}

function pathCheck(currentBtn){

  $("#"+currentBtn).addClass("pressed");
  addAudio(currentBtn);
  setTimeout(function(){
    $("#"+currentBtn).removeClass("pressed")
  },100);
  //alert()
  //console.log("path check btnArray length = " + btnArray.length + "last = "+btnArray[totalBtnClick]);
    //console.log("pathcheck inputArray length= " + inputArray.length);
     //console.log(" pathcheck currentBtn = "+currentBtn);
        console.log(" path chaeck totalBtnClick = "+totalBtnClick);
  if(btnArray[totalBtnClick]!=currentBtn)
  {
      gameOver();
      return;
  }else{
  totalBtnClick++;
  }
  if(btnArray.length<=totalBtnClick){
    setTimeout(function(){randomBtnGenerator();},1000);
  }
  //alert(btnArray.length + "=btnarrylength, totalclick = " +totalBtnClick);





}
function gameOver(){
  addAudio("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
  $("h1").text("Game Over, Press Any Key to Restart");
  level = 0;
  btnArray = [];
//  alert("game over");
  inputArray = [];
  totalBtnClick = 0;
//  console.log("btnArray length = " + btnArray.length + "last = "+btnArray[totalBtnClick]);
  //  console.log("inputArray length= " + inputArray.length);
    //  console.log("currentBtn = "+currentBtn);
      //  console.log("totalBtnClick = "+totalBtnClick);
}

function buttonClick(btn,isRandom){

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
  //var soundName = sound + "mp3";
  var soundName = new Audio("sounds/" + sound + ".mp3");
  soundName.play();
}
// for(var i = 0; i<btnArray.length;i++){
//
//   switch (btn) {
//     case 1:
//
//       break;
//     default:
//
//   }
// }
