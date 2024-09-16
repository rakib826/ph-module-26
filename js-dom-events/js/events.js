console.log("this is seperate javascript file");
//option -1
function makeRed(){
  document.body.style.backgroundColor = "red";
}

//option 2
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue(){
  document.body.style.backgroundColor = "skyblue"
}

// option 3
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple(){
  document.body.style.backgroundColor = "purple";
}

//Option 4
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener('click',makePink)
function makePink(){
  document.body.style.backgroundColor = "pink"
}
// Option -4 another
const greenButton = document.getElementById("make-green");
greenButton.addEventListener('click', function makeGreen(){
  document.body.style.backgroundColor = "green";
})
// Option-4 final
document.getElementById("make-orange").addEventListener("click",function(){
  document.body.style.backgroundColor = "orange";
})