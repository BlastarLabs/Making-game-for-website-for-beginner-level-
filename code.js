//these variables connect our code with the 'id' on the html
//we can then manipulate the variables and it will manipulate the html
var images = document.getElementById("images"); 
var text = document.getElementById("text"); 
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
//this is the variable for the name of the character
var yerdog;



//this is how after we type in the character name and hit enter
//we will add the name to the variable, remove the input box and start our first scenario
input.onkeypress = function(event) {
  console.log(input.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    yerdog =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)
  }
};


//this changes the text and puts in your characters name
var changeText = function(words) {
  text.innerHTML = words.replace("{name}", yerdog);
};

//this takes the image link and puts it in the proper format, sending it to the html
var changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};


//this looks at the number of options we have set and creates enough buttons 
var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

//this is what moves the game along
var advanceTo = function(s) {
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};






//this is the object that holds each scenario, the more you add the more options there are
//scenario = {}
var scenario = {
  one: {
    image: "imgs/game1.png", //dog
    text: "Enter your name\n",
  },
  two: {
    image: "imgs/game2.png", //house
    text: "You want to setup strong password what you should do?",
    buttons: [["use symbols letters with uppercase and lowecase and numbers", "advanceTo(scenario.three)"],["short password with no sybmbols and uppper-lowercase letters", "advanceTo(scenario.four)"]]
  },
  three: {
    image: "imgs/game3.png",//"https://s4.postimg.org/t1g20apst/261819008_d4316c1bdf_o.jpg",
    text: "You are right you know fundementals for strong password.",
    buttons: [["click for keep learning", "advanceTo(scenario.four)"]]
  },
    four: {
    image: "imgs/game4.png",
    text: "why exclamation mark is important for setup password?",
    buttons: [["because it making passwords stronger and meeting security requirements", "advanceTo(scenario.five)"],["Search the Kitchen for a knife", "advanceTo(scenario.five)"]]
  },
    five: {
    image: "imgs/game5.png",
    text: "First one is weak password and second one ise strong password",

  }
  
};


//this is the code that starts the game
advanceTo(scenario.one);
