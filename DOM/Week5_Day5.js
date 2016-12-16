// Week 5, Day 5

// Variables

var flagNext = false, flagNext2 = false, flagNext3 = false, flagNext4 = false, flagNext5 = false;
var flagNext6 = false, flagNext7 = false, flagNext8 = false, flagNext9 = false, flagNext10 = false, flagNext11 = false;
var repeatFlag = true, repeatFlag2 = true, repeatFlag3 = true, repeatFlag4 = true, repeatFlag5 = true, repeatFlag6 = true;
var emotional = 0, thinking = 0, instinct = 0;
var brawler = 0, ranger = 0, healer = 0;

// Object

var player = function() {
  this.name = "?"; // this. referred to global window "object". inget segala sesuatu kecuali primitive variable adalah object di javascript
  this.job = "?";
  this.personality = "?";
  this.gold = 10000;
  this.equipment = [];
  this.item = [];
  this.classInfo = function(job1) {
    if (job1.toLowerCase() === "brawler") {
      return "You are a close raider (melee). You are a courageous person. Your physical abilities far better than others.";
    }
    else if (job1.toLowerCase() === "ranger") {
      return "You are a remote assaulter (range). You're a nimble. Your accuracy and speed are very high in long-distance shooting.";
    }
    else if (job1.toLowerCase() === "healer") {
      return "You are a healer (range). Your existance is very much needed. You can help the injured people with your abilities.";
    }
    else {
      return "You are a novice. You are still not sure about what you want to be. It's not the time yet for you to determine your class.";
    }
  };
  this.charInfo = function(personal1) {
    if (personal1.toLowerCase() === "emotional") {
      return "You are someone who is emotional. You rely on your feelings when you act, say and think.";
    }
    else if (personal1.toLowerCase() === "thinking") {
      return "You are a thinker. You do a lot of considerations and plans before you do anything.";
    }
    else if (personal1.toLowerCase() === "instinctual"){
      return "You are someone who likes to rely on your instincts. Actions, words and decisions you take based on the spontaneous instinct.";
    }
    else {
      return "You are a mysterious person. Lot of people do not understand about you.";
    }
  };
};
var player1 = new player();

// Buttons

var openingDiv = document.getElementById('opening');
var townDiv = document.getElementById("town");
var town2Div = document.getElementById("town2");
var marketDiv = document.getElementById("market");
var eastGateDiv = document.getElementById("east-gate");
var eastForestDiv = document.getElementById("east-forest");
var marketDivBtnPrev = document.getElementById("market-btn-prev");
var marketDivBtnNext = document.getElementById("market-btn-next");
var eastGateDivBtnPrev = document.getElementById("east-gate-btn-prev");
var eastGateDivBtnNext = document.getElementById("east-gate-btn-next");
var eastForestDivBtnPrev = document.getElementById("east-forest-btn-prev");
var eastForestDivBtnNext = document.getElementById("east-forest-btn-next");

// Panels, Images, Audio

var bottomPanel = document.getElementById("bottom-panel");
var bottomPanelText = document.getElementById("bottom-panel-text");
var backgroundPanel = document.getElementById("background-panel");
var backgroundPanelText = document.getElementById("background-panel-text");
var rightPanel = document.getElementById("right-panel");
var rightPanelText = document.getElementById("right-panel-text");
var midPanel = document.getElementById("mid-panel");
var midPanelText = document.getElementById("mid-panel-text");
var endPanel = document.getElementById("end-panel");
var endPanelText = document.getElementById("end-panel-text");
var pressKeyImg = document.getElementById("press-key");
var npcTagImg = document.getElementById("npc-tag");
var npcTagImg2 = document.getElementById("npc-tag2");
var npcTagImg3 = document.getElementById("npc-tag3");
var npcTagImg4 = document.getElementById("npc-tag4");
var npcTagImg5 = document.getElementById("npc-tag5");
var placeTagImg = document.getElementById("place-tag");
var treasureTagImg = document.getElementById("treasure-tag");
var box = document.createElement("img");
var box2 = document.createElement("img");
var box3 = document.createElement("img");
var box4 = document.createElement("img");
var box5 = document.createElement("img");
var box6 = document.createElement("img");
var myVideo = document.getElementById("myVideo");

function decoration() {
  myVideo.play();
  townDiv.style.display = "none";
  town2Div.style.display = "none";
  marketDiv.style.display = "none";
  eastGateDiv.style.display = "none";
  eastForestDiv.style.display = "none";

  marketDivBtnPrev.innerHTML = "&laquo; Previous";
  marketDivBtnNext.innerHTML = "Next &raquo;";
  marketDivBtnNext.style.display = "none"; // untuk next map
  eastGateDivBtnPrev.innerHTML = "&laquo; Previous";
  eastGateDivBtnNext.innerHTML = "Next &raquo;";
  eastGateDivBtnNext.style.display = "none"; // untuk next map
  eastForestDivBtnPrev.innerHTML = "&laquo; Previous";
  eastForestDivBtnNext.innerHTML = "Next &raquo;";
  eastForestDivBtnNext.style.display = "none"; // untuk next map

  bottomPanel.style.display = "none";
  backgroundPanel.style.display = "none";
  rightPanel.style.display = "none";
  rightPanelText.innerHTML = "<h3>Character Stats</h3>" + "<p>Class: ?" + "<br/>" + "<br/>" + "Personality: ?" + "<br/></p>" + "<h3>Inventory</h3>" + "<p>Gold: " + "<span id='gold'></span>" + " Gold" + "<br/>" + "<br/>" + "Equipment: " + "<span id='equip'></span>" + "<br/>" + "<br/>" + "Items: " + "<span id='item'></span></p>";
  midPanel.style.display = "none";
  endPanel.style.display = "none";
  npcTagImg.style.display = "none";
  npcTagImg2.style.display = "none";
  npcTagImg3.style.display = "none";
  npcTagImg4.style.display = "none";
  npcTagImg5.style.display = "none";
  placeTagImg.style.display = "none";
  pressKeyImg.setAttribute("src", "DOM/images/click.png");

  box.setAttribute("class", "tag");
  box.setAttribute("id", "box");
  treasureTagImg.appendChild(box);
  box.style.display = "none";
  box2.setAttribute("class", "tag");
  box2.setAttribute("id", "box2");
  treasureTagImg.appendChild(box2);
  box2.style.display = "none";
  box3.setAttribute("class", "tag");
  box3.setAttribute("id", "box3");
  treasureTagImg.appendChild(box3);
  box3.style.display = "none";
  box4.setAttribute("class", "tag");
  box4.setAttribute("id", "box4");
  treasureTagImg.appendChild(box4);
  box4.style.display = "none";
  box5.setAttribute("class", "tag");
  box5.setAttribute("id", "box5");
  treasureTagImg.appendChild(box5);
  box5.style.display = "none";
  box6.setAttribute("class", "tag");
  box6.setAttribute("id", "box6");
  treasureTagImg.appendChild(box6);
  box6.style.display = "none";
};
decoration();

function attributSet() {
  // Else if untuk menentukan tipe job

  function chooseJob() {
    if (brawler > ranger && brawler > healer) {
      player1.job = "Brawler";
    }
    else if (ranger > brawler && ranger > healer) {
      player1.job = "Ranger";
    }
    else if (healer > brawler && healer > ranger) {
      player1.job = "Healer";
    }
    else {
      player1.job = "Novice"
    }
  };
  chooseJob();

  // Else if untuk menentukan tipe personality

  function choosePersona() {
    if (emotional > thinking && emotional > instinct) {
      player1.personality = "Emotional";
    }
    else if (thinking > emotional && thinking > instinct) {
      player1.personality = "Thinking";
    }
    else if (instinct > emotional && instinct > thinking) {
      player1.personality = "Instinctual";
    }
    else {
      player1.personality = "Unknown";
    }
  };
  choosePersona();

  var goldInfo = document.getElementById("gold");
  goldInfo.innerHTML = player1.gold;
  var equipInfo = document.getElementById("equip");
  equipInfo.innerHTML = player1.equipment;
  var itemInfo = document.getElementById("item");
  itemInfo.innerHTML = player1.item;
};
attributSet();

// Create Buttons

var pDOM = document.createElement("p");
var optionBtn = document.createElement("button");
var pDOM2 = document.createElement("p");
var optionBtn2 = document.createElement("button");
var pDOM3 = document.createElement("p");
var optionBtn3 = document.createElement("button");
var pDOM4 = document.createElement("p");
var optionBtn4 = document.createElement("button");
var pDOM5 = document.createElement("p");
var optionBtn5 = document.createElement("button");
var pDOM6 = document.createElement("p");
var optionBtn6 = document.createElement("button");
var pDOM7 = document.createElement("p");
var optionBtn7 = document.createElement("button");
var pDOM8 = document.createElement("p");
var optionBtn8 = document.createElement("button");
var pDOM9 = document.createElement("p");
var optionBtn9 = document.createElement("button");
var pDOM10 = document.createElement("p");
var optionBtn10 = document.createElement("button");
var pDOM11 = document.createElement("p");
var optionBtn11 = document.createElement("button");
var pDOM12 = document.createElement("p");
var optionBtn12 = document.createElement("button");
var pDOM13 = document.createElement("p");
var optionBtn13 = document.createElement("button");
var pDOM14 = document.createElement("p");
var optionBtn14 = document.createElement("button");
var pDOM15 = document.createElement("p");
var optionBtn15 = document.createElement("button");
var pDOM16 = document.createElement("p");
var optionBtn16 = document.createElement("button");
var pDOM17 = document.createElement("p");
var optionBtn17 = document.createElement("button");
var pDOM18 = document.createElement("p");
var optionBtn18 = document.createElement("button");
var pDOM19 = document.createElement("p");
var optionBtn19 = document.createElement("button");

function createButton() {
  pDOM.appendChild(optionBtn);
  optionBtn.setAttribute("type", "button");
  optionBtn.setAttribute("id", "option");
  midPanelText.appendChild(pDOM);
  pDOM.style.display = "none";

  pDOM2.appendChild(optionBtn2);
  optionBtn2.setAttribute("type", "button");
  optionBtn2.setAttribute("id", "option2");
  midPanelText.appendChild(pDOM2);
  pDOM2.style.display = "none";

  pDOM3.appendChild(optionBtn3);
  optionBtn3.setAttribute("type", "button");
  optionBtn3.setAttribute("id", "option3");
  midPanelText.appendChild(pDOM3);
  pDOM3.style.display = "none";

  pDOM4.appendChild(optionBtn4);
  optionBtn4.setAttribute("type", "button");
  optionBtn4.setAttribute("id", "option4");
  midPanelText.appendChild(pDOM4);
  pDOM4.style.display = "none";

  pDOM5.appendChild(optionBtn5);
  optionBtn5.setAttribute("type", "button");
  optionBtn5.setAttribute("id", "option5");
  midPanelText.appendChild(pDOM5);
  pDOM5.style.display = "none";

  pDOM6.appendChild(optionBtn6);
  optionBtn6.setAttribute("type", "button");
  optionBtn6.setAttribute("id", "option6");
  midPanelText.appendChild(pDOM6);
  pDOM6.style.display = "none";

  pDOM7.appendChild(optionBtn7);
  optionBtn7.setAttribute("type", "button");
  optionBtn7.setAttribute("id", "option7");
  midPanelText.appendChild(pDOM7);
  pDOM7.style.display = "none";

  pDOM8.appendChild(optionBtn8);
  optionBtn8.setAttribute("type", "button");
  optionBtn8.setAttribute("id", "option8");
  midPanelText.appendChild(pDOM8);
  pDOM8.style.display = "block";

  pDOM9.appendChild(optionBtn9);
  optionBtn9.setAttribute("type", "button");
  optionBtn9.setAttribute("id", "option9");
  midPanelText.appendChild(pDOM9);
  pDOM9.style.display = "none";

  pDOM10.appendChild(optionBtn10);
  optionBtn10.setAttribute("type", "button");
  optionBtn10.setAttribute("id", "option10");
  midPanelText.appendChild(pDOM10);
  pDOM10.style.display = "none";

  pDOM11.appendChild(optionBtn11);
  optionBtn11.setAttribute("type", "button");
  optionBtn11.setAttribute("id", "option11");
  midPanelText.appendChild(pDOM11);
  pDOM11.style.display = "none";

  pDOM12.appendChild(optionBtn12);
  optionBtn12.setAttribute("type", "button");
  optionBtn12.setAttribute("id", "option12");
  midPanelText.appendChild(pDOM12);
  pDOM12.style.display = "none";

  pDOM13.appendChild(optionBtn13);
  optionBtn13.setAttribute("type", "button");
  optionBtn13.setAttribute("id", "option13");
  midPanelText.appendChild(pDOM13);
  pDOM13.style.display = "none";

  pDOM14.appendChild(optionBtn14);
  optionBtn14.setAttribute("type", "button");
  optionBtn14.setAttribute("id", "option14");
  midPanelText.appendChild(pDOM14);
  pDOM14.style.display = "none";

  pDOM15.appendChild(optionBtn15);
  optionBtn15.setAttribute("type", "button");
  optionBtn15.setAttribute("id", "option15");
  midPanelText.appendChild(pDOM15);
  pDOM15.style.display = "none";

  pDOM16.appendChild(optionBtn16);
  optionBtn16.setAttribute("type", "button");
  optionBtn16.setAttribute("id", "option16");
  midPanelText.appendChild(pDOM16);
  pDOM16.style.display = "none";

  pDOM17.appendChild(optionBtn17);
  optionBtn17.setAttribute("type", "button");
  optionBtn17.setAttribute("id", "option17");
  midPanelText.appendChild(pDOM17);
  pDOM17.style.display = "none";

  pDOM18.appendChild(optionBtn18);
  optionBtn18.setAttribute("type", "button");
  optionBtn18.setAttribute("id", "option18");
  midPanelText.appendChild(pDOM18);
  pDOM18.style.display = "none";

  pDOM19.appendChild(optionBtn19);
  optionBtn19.setAttribute("type", "button");
  optionBtn19.setAttribute("id", "option19");
  midPanelText.appendChild(pDOM19);
  pDOM19.style.display = "none";
};
createButton();

// Events

openingDiv.addEventListener("click", function() {
  townDiv.style.display = "block";
  bottomPanel.style.display = "block";
  bottomPanelText.innerHTML = "<h1>Introduction</h1>" + "<p>Welcome to the Virtual Kingdom of Lorsania (Part 1)." + "</br>" + "</br>" + "In this world, you are going to confront some series of events that occurs based on your own preference/choice." + "<br/>" + "At first in this game (Part 1), the story will direct you to the same ending. Later on, you are going to explore the world on your own." + "<br/>" + "<br/>" + "Part 1 Ending: You are going to find out what kind of class/job you are match with and your character's personality.</p>";
  // backgroundPanel.style.display = "none"; sowieso ga muncul karena deklarasi awal
});

townDiv.addEventListener("click", function() {
  town2Div.style.display = "block";
  bottomPanel.style.display = "none";
  backgroundPanel.style.display = "block";
  backgroundPanelText.innerHTML = "<img src='DOM/images/beginning.png'>" + "<br/>" + "In a time of strife between God, humans, and demons..." + "<br/>" + "<br/>" + "Scarred during the gruesome war and avoiding total destruction altogether, God, humans, and demons manage to enter into a truce..." + "<br/>" + "<br/>" + "But after 1,000 years of fragile and forged peace in Lorsania..." + "<br/>" + "<br/>" + "The lengthy peace eventually led the humans to forget their memories of the scars and hardship from the war. As they forgot faults of the past, selfishness, corruption, and arrogance slowly spread throughout the land..." + "<br/>" + "<br/>" + "Finally, the balance of peace broke and strange occurrences started happening. There came a strange howl from the boundaries that divided God, humans, and demons. Peaceful creatures became aggressive and attacked innocent villagers. Violent earthquakes, great hail storms drove some species to the brink of extinction..." + "<br/>" + "<br/>" + "The mysterious legend of demons were rediscovered...";
});

town2Div.addEventListener("click", function() {
  marketDiv.style.display = "block";
  npcTagImg.style.display = "block";
  npcTagImg.setAttribute("src", "DOM/images/merchant.png");
  npcTagImg2.style.display = "block";
  npcTagImg2.setAttribute("src", "DOM/images/merchant2.png");
  npcTagImg3.style.display = "block";
  npcTagImg3.setAttribute("src", "DOM/images/merchant3.png");
  placeTagImg.style.display = "block"; // for always
  placeTagImg.setAttribute("src", "DOM/images/market.png");
  bottomPanel.style.display = "block"; // for always
  bottomPanelText.innerHTML = "<p>This is where your adventure begin. You are in the middle of crowded place. There are a lot of people around you who are selling their stuffs. You are in a market square! What are you going to do now?</p>";
  // backgroundPanel.style.display = "none"; sowieso ga muncul karena ga kebagian
  rightPanel.style.display = "block"; // for always
});

marketDivBtnPrev.addEventListener("click", function() {
  town2Div.style.display = "block";
  marketDiv.style.display = "none";
  npcTagImg.style.display = "none";
  npcTagImg2.style.display = "none";
  npcTagImg3.style.display = "none";
  placeTagImg.style.display = "none";
  bottomPanel.style.display = "none";
  rightPanel.style.display = "none";
  midPanel.style.display = "none";
});

marketDivBtnNext.addEventListener("click", function() {
  eastGateDiv.style.display = "block";
  npcTagImg.style.display = "none";
  npcTagImg2.style.display = "none";
  npcTagImg3.style.display = "none";
  npcTagImg4.style.display = "block";
  npcTagImg4.setAttribute("src", "DOM/images/stranger.png");
  npcTagImg5.style.display = "block";
  npcTagImg5.setAttribute("src", "DOM/images/stranger2.png");
  placeTagImg.style.display = "block";
  placeTagImg.setAttribute("src", "DOM/images/east_gate.png");
  bottomPanel.style.display = "block";
  bottomPanelText.innerHTML = "<p>You are at the East Gate of Lorsania. What are you going to do now?</p>";
  rightPanel.style.display = "block";
  midPanel.style.display = "none";
});

eastGateDivBtnPrev.addEventListener("click", function() {
  marketDiv.style.display = "block";
  eastGateDiv.style.display = "none";
  npcTagImg.style.display = "block";
  npcTagImg.setAttribute("src", "DOM/images/merchant.png");
  npcTagImg2.style.display = "block";
  npcTagImg2.setAttribute("src", "DOM/images/merchant2.png");
  npcTagImg3.style.display = "block";
  npcTagImg3.setAttribute("src", "DOM/images/merchant3.png");
  npcTagImg4.style.display = "none";
  npcTagImg5.style.display = "none";
  placeTagImg.style.display = "block";
  placeTagImg.setAttribute("src", "DOM/images/market.png");
  bottomPanel.style.display = "block";
  bottomPanelText.innerHTML = "<p>This is where your adventure begin. You are in the middle of crowded place. There are a lot of people around you who are selling their stuffs. You are in a market square! What are you going to do now?</p>";
  rightPanel.style.display = "block";
  midPanel.style.display = "none";
});

eastGateDivBtnNext.addEventListener("click", function() {
  eastForestDiv.style.display = "block";
  npcTagImg.style.display = "none";
  npcTagImg2.style.display = "none";
  npcTagImg3.style.display = "none";
  npcTagImg4.style.display = "none";
  npcTagImg5.style.display = "none";
  box.style.display = "block";
  box.setAttribute("src", "DOM/images/treasure_chest.png");
  box.style.opacity = 0;
  box2.style.display = "block";
  box2.setAttribute("src", "DOM/images/treasure_chest.png");
  box2.style.opacity = 0;
  box3.style.display = "block";
  box3.setAttribute("src", "DOM/images/treasure_chest.png");
  box3.style.opacity = 0;
  box4.style.display = "block";
  box4.setAttribute("src", "DOM/images/treasure_chest.png");
  box4.style.opacity = 0;
  box5.style.display = "block";
  box5.setAttribute("src", "DOM/images/treasure_chest.png");
  box5.style.opacity = 0;
  box6.style.display = "block";
  box6.setAttribute("src", "DOM/images/treasure_chest.png");
  box6.style.opacity = 0;
  placeTagImg.style.display = "block";
  placeTagImg.setAttribute("src", "DOM/images/east_forest.png");
  bottomPanel.style.display = "block";
  bottomPanelText.innerHTML = "<p>You are at the East Forest. This is a bonus stage! Find all treasures that are hidden in this map! In the next story, you are going to confront your first creature. So be prepared!" + "<br/>" + "Note: if you can't find all the hidden treasures, you won't be able to go any further.</p>";
  rightPanel.style.display = "block";
  midPanel.style.display = "none";
});

eastForestDivBtnPrev.addEventListener("click", function() {
  eastGateDiv.style.display = "block";
  eastForestDiv.style.display = "none";
  npcTagImg.style.display = "none";
  npcTagImg2.style.display = "none";
  npcTagImg3.style.display = "none";
  npcTagImg4.style.display = "block";
  npcTagImg4.setAttribute("src", "DOM/images/stranger.png");
  npcTagImg5.style.display = "block";
  npcTagImg5.setAttribute("src", "DOM/images/stranger2.png");
  box.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "none";
  box4.style.display = "none";
  box5.style.display = "none";
  box6.style.display = "none";
  placeTagImg.style.display = "block"; // for always
  placeTagImg.setAttribute("src", "DOM/images/east_gate.png");
  bottomPanel.style.display = "block"; // for always
  bottomPanelText.innerHTML = "<p>You are at the East Gate of Lorsania. What are you going to do now?</p>";
  rightPanel.style.display = "block"; // for always
  midPanel.style.display = "none";
  endPanel.style.display = "none";
});

eastForestDivBtnNext.addEventListener("click", function() {
  bottomPanel.style.display = "none";
  endPanel.style.display = "block";
  endPanelText.innerHTML = "<img src='DOM/images/continue.png'>" + "<br/>" + "Thank you for playing The Virtual Kingdom of Lorsania (Part 1)." + "<br/>" + "<br/>" + "This is not the end, but the beginning of the whole story. In the future, there will be lots of battle scene and the maps will be much bigger! (Part 2)" + "<br/>" + "<br/>" + "This is the result of your character until this point:  " + "<br/>" + "<br/>" + "Your Class: " + player1.job + ". " + player1.classInfo(player1.job) + "<br/>" + "<br/>" +"Your Personality: " + player1.personality + ". " + player1.charInfo(player1.personality);
  rightPanelText.innerHTML = "<h3>Character Stats</h3>" + "<p>Class: " + player1.job + "<br/>" + "<br/>" + "Personality: " +  player1.personality + "<br/></p>" + "<h3>Inventory</h3>" + "<p>Gold: " + player1.gold + " Gold" + "<br/>" + "<br/>" + "Equipment: " + player1.equipment + "<br/>" + "<br/>" + "Items: " + player1.item + "</p>";
  eastForestDivBtnPrev.style.display = "none";
  eastForestDivBtnNext.style.display = "none";
  box.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "none";
  box4.style.display = "none";
  box5.style.display = "none";
  box6.style.display = "none";
})

npcTagImg.addEventListener("click", function() {
  bottomPanelText.innerHTML = "<p>Vloyd - Item Merchant:" + "<br/>" + "<br/>" + "What are you looking at?! Are you gonna buy something?</p>";
  midPanel.style.display = "block";
  midPanel.setAttribute ("class", "general-panel mid-panel");
  pDOM.style.display = "block";
  optionBtn.innerHTML = "Ask Question";
  optionBtn.setAttribute("class", "button button-option option1");
  pDOM2.style.display = "none";
  pDOM3.style.display = "none";
  pDOM4.style.display = "none";
  pDOM5.style.display = "none";
  pDOM6.style.display = "none";
  pDOM7.style.display = "none";
  optionBtn8.innerHTML = "Leave";
  optionBtn8.setAttribute("class", "button button-option option3");
  pDOM9.style.display = "none";
  pDOM10.style.display = "none";
  pDOM11.style.display = "none";
  pDOM12.style.display = "none";
  pDOM13.style.display = "none";
  pDOM14.style.display = "none";
  pDOM15.style.display = "none";
  pDOM16.style.display = "none";
  pDOM17.style.display = "none";
  pDOM18.style.display = "none";
  pDOM19.style.display = "none";

  optionBtn.addEventListener("click", function () {
    bottomPanelText.innerHTML = "<p>Vloyd - Item Merchant:" + "<br/>" + "<br/>" + "You are new in this town? No wonder, your face doesn't look familiar to me." + "<br/>" + "This is Lorden, the capital city of Lorsania. Although it's a beautiful place, but the life here is hard." + "<br/>" + "You need to go hunt monster outside of the city to earn gold. Otherwise you won't survive!</p>";
    flagNext = true;
    nextMap();
  });

  optionBtn8.addEventListener("click", function () {
    bottomPanelText.innerHTML = "<p>This is where your adventure begin. You are in the middle of crowded place. There are a lot of people around you who are selling their stuffs. You are in a market square! What are you going to do now?</p>";
    midPanel.style.display = "none";
    flagNext = true;
    nextMap();
  });
});

npcTagImg2.addEventListener("click", function() {
  bottomPanelText.innerHTML = "<p>Flemp and His Piggy:" + "<br/>" + "<br/>" + "Pardon me, young one. Could you help me and my little Piggy right here? We haven't eat for 2 days and we are very hungry." + "<br/>" + "Would you spare us some of your gold?</p>";
  midPanel.style.display = "block";
  midPanel.setAttribute ("class", "general-panel mid-panel2");
  pDOM.style.display = "none";
  pDOM2.style.display = "block";
  optionBtn2.setAttribute("class", "button button-option option");
  optionBtn2.innerHTML = "You pity him. You give 500 Gold without thinking much";
  pDOM3.style.display = "block";
  optionBtn3.setAttribute("class", "button button-option option2");
  optionBtn3.innerHTML = "At first you hesitate, but you thought maybe he could give you some information. You give him 500 Gold in the end";
  pDOM4.style.display = "block";
  optionBtn4.setAttribute("class", "button button-option option3");
  optionBtn4.innerHTML = "Your instinct told you not to help him. You say sorry to him";
  pDOM5.style.display = "none";
  pDOM6.style.display = "none";
  pDOM7.style.display = "none";
  optionBtn8.setAttribute("class", "button button-option option4");
  optionBtn8.innerHTML = "Leave";
  pDOM9.style.display = "none";
  pDOM10.style.display = "none";
  pDOM11.style.display = "none";
  pDOM12.style.display = "none";
  pDOM13.style.display = "none";
  pDOM14.style.display = "none";
  pDOM15.style.display = "none";
  pDOM16.style.display = "none";
  pDOM17.style.display = "none";
  pDOM18.style.display = "none";
  pDOM19.style.display = "none";

  optionBtn2.addEventListener("click", function () {
    emotional++;
    if (player1.gold >= 500) {
      player1.gold -= 500;
    }
    else{
      bottomPanelText.innerHTML = "You don't have enough gold!";
      return false;
    }
    attributSet();
    optionBtn3.disabled = true;
    optionBtn4.disabled = true;
    bottomPanelText.innerHTML = "<p>Flemp and his Piggy:" + "<br/>" + "<br/>" + "Thank you so much young one. You have a very kind heart. Don't get lost in this big and crowded city. If you are trying to find some weak monsters, East Forest is the place you are looking for. Take care young one.</p>";
    flagNext2 = true;
    nextMap();
  });

  optionBtn3.addEventListener("click", function () {
    thinking++;
    if (player1.gold >= 500) {
      player1.gold -= 500;
    }
    else{
      bottomPanelText.innerHTML = "You don't have enough gold!";
      return false;
    }
    attributSet();
    optionBtn2.disabled = true;
    optionBtn4.disabled = true;
    bottomPanelText.innerHTML = "<p>Flemp and His Piggy:" + "<br/>" + "<br/>" + "Thank you so much young one. I haven't seen you before. Are you an adventurer? You might want to find some useful items and equipments before you want to hunt some monsters in East Forest. Take care young one.</p>";
    flagNext2 = true;
    nextMap();
  });

  optionBtn4.addEventListener("click", function () {
    instinct++;
    attributSet();
    optionBtn2.disabled = true;
    optionBtn3.disabled = true;
    bottomPanelText.innerHTML = "<p>Flemp and His Piggy:" + "<br/>" + "<br/>" + "It's alright, young one. Thank you for your politeness. If you might want some advice, East Forest is a good place for hunting. Take care young one.</p>";
    flagNext2 = true;
    nextMap();
  });

  optionBtn8.addEventListener("click", function () {
    bottomPanelText.innerHTML = "<p>This is where your adventure begin. You are in the middle of crowded place. There are a lot of people around you who are selling their stuffs. You are in a market square! What are you going to do now?</p>";
    midPanel.style.display = "none";
  });
});

npcTagImg3.addEventListener("click", function() {
  bottomPanelText.innerHTML = "<p>Lory:" + "<br/>" + "<br/>" + "HeELLOoO, youngster!!" + "<br/>" + "Would you like to buy some ReEeEaAaLLyy good and strong weapons from me??" + "<br/>" + "You don't want to miss this one!</p>";
  midPanel.style.display = "block";
  midPanel.setAttribute ("class", "general-panel mid-panel2");
  pDOM.style.display = "none";
  pDOM2.style.display = "none";
  pDOM3.style.display = "none";
  pDOM4.style.display = "none";
  pDOM5.style.display = "block";
  optionBtn5.innerHTML = "You don't like him from the first impression. 'He is too noisy', you thought. You just leave him alone";
  optionBtn5.setAttribute("class", "button button-option option");
  pDOM6.style.display = "block";
  optionBtn6.innerHTML = "You think it's not a bad idea to buy a weapon first before you go hunting. You stop by";
  optionBtn6.setAttribute("class", "button button-option option2");
  pDOM7.style.display = "block";
  optionBtn7.innerHTML = "You actually don't care about what he's saying. Your eyes are into his goods. Your inctinct drag you to look in";
  optionBtn7.setAttribute("class", "button button-option option3");
  optionBtn8.innerHTML = "Leave";
  optionBtn8.setAttribute("class", "button button-option option4");
  pDOM9.style.display = "none";
  pDOM10.style.display = "none";
  pDOM11.style.display = "none";
  pDOM12.style.display = "none";
  pDOM13.style.display = "none";
  pDOM14.style.display = "none";
  pDOM15.style.display = "none";
  pDOM16.style.display = "none";
  pDOM17.style.display = "none";
  pDOM18.style.display = "none";
  pDOM19.style.display = "none";

  optionBtn5.addEventListener("click", function () {
    emotional++;
    attributSet();
    optionBtn6.disabled = true;
    optionBtn7.disabled = true;
    bottomPanelText.innerHTML = "<p>Lory:" + "<br/>" + "<br/>" + "No no no, wait wait!! Ohh, c'mon...</p>";
    flagNext3 = true;
    nextMap();
  });

  optionBtn6.addEventListener("click", function () {
    thinking++;
    attributSet();
    optionBtn5.disabled = true;
    optionBtn7.disabled = true;
    bottomPanelText.innerHTML = "<p>Lory:" + "<br/>" + "<br/>" + "Oh, hello there! You made the correct decision, welcome!" + "<br/>" + "I have these 3 beautiful items with me, each of them cost 5000 gold only! Which one are you interested in?</p>";
    pDOM5.style.display = "none";
    pDOM6.style.display = "none";
    pDOM7.style.display = "none";
    pDOM9.style.display = "block";
    optionBtn9.setAttribute("class", "button button-image position");
    optionBtn9.innerHTML = "<img src='DOM/images/sword.png' class='option5'>";
    pDOM10.style.display = "block";
    optionBtn10.setAttribute("class", "button button-image position2");
    optionBtn10.innerHTML = "<img src='DOM/images/bow.png' class='option6'>";
    pDOM11.style.display = "block";
    optionBtn11.setAttribute("class", "button button-image position3");
    optionBtn11.innerHTML = "<img src='DOM/images/wand.png' class='option7'>";

    optionBtn9.addEventListener("click", function () {
      brawler++;
      if (player1.gold >= 5000) {
        player1.gold -= 5000;
      }
      else{
        bottomPanelText.innerHTML = "You don't have enough gold!";
        return false;
      }
      player1.equipment.push("Stinger Blade");
      attributSet();
      bottomPanelText.innerHTML = "<p>Oh, you chose Stinger Blade! You have good eyes, kid. Nice to have business with you.</p>";
      optionBtn10.disabled = true;
      optionBtn11.disabled = true;
    });

    optionBtn10.addEventListener("click", function () {
      ranger++;
      if (player1.gold >= 5000) {
        player1.gold -= 5000;
      }
      else{
        bottomPanelText.innerHTML = "You don't have enough gold!";
        return false;
      }
      player1.equipment.push("Viper Bow");
      attributSet();
      bottomPanelText.innerHTML = "<p>Oh, you chose Viper Bow! You have good eyes, kid. Nice to have business with you.</p>";
      optionBtn9.disabled = true;
      optionBtn11.disabled = true;
    });

    optionBtn11.addEventListener("click", function () {
      healer++;
      if (player1.gold >= 5000) {
        player1.gold -= 5000;
      }
      else{
        bottomPanelText.innerHTML = "You don't have enough gold!";
        return false;
      }
      player1.equipment.push("Netherbane Wand");
      attributSet();
      bottomPanelText.innerHTML = "<p>Oh, you chose Netherbane Wand! You have good eyes, kid. Nice to have business with you.</p>";
      optionBtn9.disabled = true;
      optionBtn10.disabled = true;
    });
    flagNext3 = true;
    nextMap();
  });

  optionBtn7.addEventListener("click", function () {
    instinct++;
    attributSet();
    optionBtn5.disabled = true;
    optionBtn6.disabled = true;
    bottomPanelText.innerHTML = "<p>Lory:" + "<br/>" + "<br/>" + "You don't want to miss thi...Oh well, oh well what do we have here! Welcome, kid! Each of them cost 5000 gold only! Which one do you like?</p>";
    pDOM5.style.display = "none";
    pDOM6.style.display = "none";
    pDOM7.style.display = "none";
    pDOM9.style.display = "block";
    optionBtn9.setAttribute("class", "button button-image position");
    optionBtn9.innerHTML = "<img src='DOM/images/sword.png' class='option5'>";
    pDOM10.style.display = "block";
    optionBtn10.setAttribute("class", "button button-image position2");
    optionBtn10.innerHTML = "<img src='DOM/images/bow.png' class='option6'>";
    pDOM11.style.display = "block";
    optionBtn11.setAttribute("class", "button button-image position3");
    optionBtn11.innerHTML = "<img src='DOM/images/wand.png' class='option7'>";

    optionBtn9.addEventListener("click", function () {
      brawler++;
      if (player1.gold >= 5000) {
        player1.gold -= 5000;
      }
      else{
        bottomPanelText.innerHTML = "You don't have enough gold!";
        return false;
      }
      player1.equipment.push("Stinger Blade");
      attributSet();
      bottomPanelText.innerHTML = "<p>Oh, you chose Stinger Blade! You have good eyes, kid. Nice to have business with you.</p>";
      optionBtn10.disabled = true;
      optionBtn11.disabled = true;
    });

    optionBtn10.addEventListener("click", function () {
      ranger++;
      if (player1.gold >= 5000) {
        player1.gold -= 5000;
      }
      else{
        bottomPanelText.innerHTML = "You don't have enough gold!";
        return false;
      }
      player1.equipment.push("Viper Bow");
      attributSet();
      bottomPanelText.innerHTML = "<p>Oh, you chose Viper Bow! You have good eyes, kid. Nice to have business with you.</p>";
      optionBtn9.disabled = true;
      optionBtn11.disabled = true;
    });

    optionBtn11.addEventListener("click", function () {
      healer++;
      if (player1.gold >= 5000) {
        player1.gold -= 5000;
      }
      else{
        bottomPanelText.innerHTML = "You don't have enough gold!";
        return false;
      }
      player1.equipment.push("Netherbane Wand");
      attributSet();
      bottomPanelText.innerHTML = "<p>Oh, you chose Netherbane Wand! You have good eyes, kid. Nice to have business with you.</p>";
      optionBtn9.disabled = true;
      optionBtn10.disabled = true;
    });
    flagNext3 = true;
    nextMap();
  });

  optionBtn8.addEventListener("click", function () {
    bottomPanelText.innerHTML = "<p>This is where your adventure begin. You are in the middle of crowded place. There are a lot of people around you who are selling their stuffs. You are in a market square! What are you going to do now?</p>";
    midPanel.style.display = "none";
  });
});

npcTagImg4.addEventListener("click", function() {
  bottomPanelText.innerHTML = "<p>Elgor - Stranger:" + "<br/>" + "<br/>" + "Hello, young one. You seem to be lost, are you new in this city?</p>";
  midPanel.style.display = "block";
  midPanel.setAttribute ("class", "general-panel mid-panel");
  pDOM.style.display = "none";
  pDOM2.style.display = "none";
  pDOM3.style.display = "none";
  pDOM4.style.display = "none";
  pDOM5.style.display = "none";
  pDOM6.style.display = "none";
  pDOM7.style.display = "none";
  optionBtn8.innerHTML = "Leave";
  optionBtn8.setAttribute("class", "button button-option option3");
  pDOM9.style.display = "none";
  pDOM10.style.display = "none";
  pDOM11.style.display = "none";
  pDOM12.style.display = "none";
  pDOM13.style.display = "none";
  pDOM14.style.display = "none";
  pDOM15.style.display = "none";
  pDOM16.style.display = "none";
  pDOM17.style.display = "none";
  pDOM18.style.display = "block";
  optionBtn18.setAttribute("class", "button button-option option1");
  optionBtn18.innerHTML = "Ask For Help";
  pDOM19.style.display = "none";

  optionBtn18.addEventListener("click", function () {
    bottomPanelText.innerHTML = "<p>Elgor - Stranger:" + "<br/>" + "<br/>" + "Do you need any help?" + "<br/>" + "Let me provide you with these armors, you might want to have them while you are in the East Forest. It's dangerous there.</p>";
    midPanel.setAttribute ("class", "general-panel mid-panel2");
    optionBtn8.setAttribute("class", "button button-option option4");
    pDOM12.style.display = "block";
    optionBtn12.setAttribute("class", "button button-image2 position4");
    optionBtn12.innerHTML = "<img src='DOM/images/heavy_armor.jpg' class='option8'>";
    pDOM13.style.display = "block";
    optionBtn13.setAttribute("class", "button button-image2 position5");
    optionBtn13.innerHTML = "<img src='DOM/images/leather_armor.jpg' class='option8'>";
    pDOM14.style.display = "block";
    optionBtn14.setAttribute("class", "button button-image2 position6");
    optionBtn14.innerHTML = "<img src='DOM/images/cloth_armor.jpg' class='option8'>";
    pDOM18.style.display = "none";

    optionBtn12.addEventListener("click", function () {
      brawler++;
      if (player1.equipment.indexOf("Heavy Armor") == -1) {
        player1.equipment.push("Heavy Armor");
      };
      attributSet();
      bottomPanelText.innerHTML = "<p>You chose Heavy Armor. Heavy armors grant bonus life, bonus armor as well as defensive abilities.</p>";
      optionBtn13.disabled = true;
      optionBtn14.disabled = true;
    });

    optionBtn13.addEventListener("click", function () {
      ranger++;
      if (player1.equipment.indexOf("Leather Armor") == -1) {
        player1.equipment.push("Leather Armor");
      };
      attributSet();
      bottomPanelText.innerHTML = "<p>You chose Leather Armor. Leather armors provide movement speed boosts, crowd control defense, damage reduction and stealth.</p>";
      optionBtn12.disabled = true;
      optionBtn14.disabled = true;
    });

    optionBtn14.addEventListener("click", function () {
      healer++;
      if (player1.equipment.indexOf("Cloth Armor") == -1) {
        player1.equipment.push("Cloth Armor");
      };
      attributSet();
      bottomPanelText.innerHTML = "<p>You chose Cloth Armor. Cloth armors provide enhanced magic damage, offensive and defensive abilities when using magic skills.</p>";
      optionBtn12.disabled = true;
      optionBtn13.disabled = true;
    });
    flagNext4 = true;
    nextMap2();
  });

  optionBtn8.addEventListener("click", function () {
    bottomPanelText.innerHTML = "<p>You are at the East Gate of Lorsania. What are you going to do now?</p>";
    midPanel.style.display = "none";
  });
});

npcTagImg5.addEventListener("click", function() {
  bottomPanelText.innerHTML = "<p>Grim Gun - ?:" + "<br/>" + "<br/>" + "You underestimate the power of the Dark Side. Humans are a disease, a cancer of this world. If you will not fight, then you will meet your destiny." + "<br/>" + "Oh, yes, there will be blood HA HA HA HA! </p>";
  midPanel.style.display = "block";
  midPanel.setAttribute ("class", "general-panel mid-panel2");
  pDOM.style.display = "none";
  pDOM2.style.display = "none";
  pDOM3.style.display = "none";
  pDOM4.style.display = "none";
  pDOM5.style.display = "none";
  pDOM6.style.display = "none";
  pDOM7.style.display = "none";
  optionBtn8.innerHTML = "Leave";
  optionBtn8.setAttribute("class", "button button-option option4");
  pDOM9.style.display = "none";
  pDOM10.style.display = "none";
  pDOM11.style.display = "none";
  pDOM12.style.display = "none";
  pDOM13.style.display = "none";
  pDOM14.style.display = "none";
  pDOM15.style.display = "block";
  optionBtn15.setAttribute("class", "button button-option option_2");
  optionBtn15.innerHTML = "You aren't intimidated by his saying. Instead you feel anger burst your body. You try to reason with him and ask his purpose.";
  pDOM16.style.display = "block";
  optionBtn16.setAttribute("class", "button button-option option2_2");
  optionBtn16.innerHTML = "You are curious about his presence and purpose. You thought you shouldn't leave him alone lurking on the street.";
  pDOM17.style.display = "block";
  optionBtn17.setAttribute("class", "button button-option option3");
  optionBtn17.innerHTML = "Your instinct told you it's no use to reason with someone like him. He is a dangerous man. You ignore him.";
  pDOM18.style.display = "none";
  pDOM19.style.display = "none";

  optionBtn15.addEventListener("click", function () {
    emotional++;
    attributSet();
    optionBtn16.disabled = true;
    optionBtn17.disabled = true;
    bottomPanelText.innerHTML = "<p>Grim Gun - ?:" + "<br/>" + "<br/>" + "Who I am? HAHAHA..My presence isn't important. The Dark Side will consume and take over this world with His power!</p>";
    flagNext5 = true;
    nextMap2();
  });

  optionBtn16.addEventListener("click", function () {
    thinking++;
    attributSet();
    optionBtn15.disabled = true;
    optionBtn17.disabled = true;
    bottomPanelText.innerHTML = "<p>Grim Gun - ?:" + "<br/>" + "<br/>" + "What my purpose is? The extinction of humanity! HAHAHA..The Dark Side will consume and take over this world with His power!</p>";
    flagNext5 = true;
    nextMap2();
  });

  optionBtn17.addEventListener("click", function () {
    instinct++;
    attributSet();
    optionBtn15.disabled = true;
    optionBtn16.disabled = true;
    bottomPanelText.innerHTML = "<p>Grim Gun - ?:" + "<br/>" + "<br/>" + "You can't run away from the Dark Side. Prepare! The Dark Side will consume and take over this world with His power! HAHAHA..</p>";
    flagNext5 = true;
    nextMap2();
  });

  optionBtn8.addEventListener("click", function () {
    bottomPanelText.innerHTML = "<p>You are at the East Gate of Lorsania. What are you going to do now?</p>";
    midPanel.style.display = "none";
  });
});

box.addEventListener("click", function() {
  if (repeatFlag === true) {
    flagNext6 = true;
    repeatFlag = false;
    box.style.opacity = 1;
    box.style.cursor = "not-allowed";
    midPanel.style.display = "block";
    midPanel.setAttribute ("class", "general-panel mid-panel");
    pDOM.style.display = "none";
    pDOM2.style.display = "none";
    pDOM3.style.display = "none";
    pDOM4.style.display = "none";
    pDOM5.style.display = "none";
    pDOM6.style.display = "none";
    pDOM7.style.display = "none";
    optionBtn8.innerHTML = "Leave";
    optionBtn8.setAttribute("class", "button button-option option3_2");
    pDOM9.style.display = "none";
    pDOM10.style.display = "none";
    pDOM11.style.display = "none";
    pDOM12.style.display = "none";
    pDOM13.style.display = "none";
    pDOM14.style.display = "none";
    pDOM15.style.display = "none";
    pDOM16.style.display = "none";
    pDOM17.style.display = "none";
    pDOM18.style.display = "none";
    pDOM19.style.display = "block";
    optionBtn19.setAttribute("class", "tag button-image3 option1_1");
    optionBtn19.innerHTML = "<img src='DOM/images/sword2.png'>";
    player1.equipment.push("Stinger Blade");
    attributSet();
  }

  optionBtn8.addEventListener("click", function () {
    midPanel.style.display = "none";
    bottomPanelText.innerHTML = "<p>You are at the East Forest. This is a bonus stage! Find all treasures that are hidden in this map! In the next story, you are going to confront your first creature. So be prepared!" + "<br/>" + "Note: if you can't find all the hidden treasures, you won't be able to go any further.</p>";
  });
  nextMap3();
});

box2.addEventListener("click", function() {
  if (repeatFlag2 === true) {
    flagNext7 = true;
    repeatFlag2 = false;
    box2.style.opacity = 1;
    box2.style.cursor = "not-allowed";
    midPanel.style.display = "block";
    midPanel.setAttribute ("class", "general-panel mid-panel");
    pDOM.style.display = "none";
    pDOM2.style.display = "none";
    pDOM3.style.display = "none";
    pDOM4.style.display = "none";
    pDOM5.style.display = "none";
    pDOM6.style.display = "none";
    pDOM7.style.display = "none";
    optionBtn8.innerHTML = "Leave";
    optionBtn8.setAttribute("class", "button button-option option3_2");
    pDOM9.style.display = "none";
    pDOM10.style.display = "none";
    pDOM11.style.display = "none";
    pDOM12.style.display = "none";
    pDOM13.style.display = "none";
    pDOM14.style.display = "none";
    pDOM15.style.display = "none";
    pDOM16.style.display = "none";
    pDOM17.style.display = "none";
    pDOM18.style.display = "none";
    pDOM19.style.display = "block";
    optionBtn19.setAttribute("class", "tag button-image3 option1_1");
    optionBtn19.innerHTML = "<img src='DOM/images/bow2.png'>";
    player1.equipment.push("Viper Bow");
    attributSet();
  }

  optionBtn8.addEventListener("click", function () {
    midPanel.style.display = "none";
    bottomPanelText.innerHTML = "<p>You are at the East Forest. This is a bonus stage! Find all treasures that are hidden in this map! In the next story, you are going to confront your first creature. So be prepared!" + "<br/>" + "Note: if you can't find all the hidden treasures, you won't be able to go any further.</p>";
  });
  nextMap3();
});

box3.addEventListener("click", function() {
  if (repeatFlag3 === true) {
    flagNext8 = true;
    repeatFlag3 = false;
    box3.style.opacity = 1;
    box3.style.cursor = "not-allowed";
    midPanel.style.display = "block";
    midPanel.setAttribute ("class", "general-panel mid-panel");
    pDOM.style.display = "none";
    pDOM2.style.display = "none";
    pDOM3.style.display = "none";
    pDOM4.style.display = "none";
    pDOM5.style.display = "none";
    pDOM6.style.display = "none";
    pDOM7.style.display = "none";
    optionBtn8.innerHTML = "Leave";
    optionBtn8.setAttribute("class", "button button-option option3_2");
    pDOM9.style.display = "none";
    pDOM10.style.display = "none";
    pDOM11.style.display = "none";
    pDOM12.style.display = "none";
    pDOM13.style.display = "none";
    pDOM14.style.display = "none";
    pDOM15.style.display = "none";
    pDOM16.style.display = "none";
    pDOM17.style.display = "none";
    pDOM18.style.display = "none";
    pDOM19.style.display = "block";
    optionBtn19.setAttribute("class", "tag button-image3 option1_1");
    optionBtn19.innerHTML = "<img src='DOM/images/wand2.png'>";
    player1.equipment.push("Netherbane Wand");
    attributSet();
  }

  optionBtn8.addEventListener("click", function () {
    midPanel.style.display = "none";
    bottomPanelText.innerHTML = "<p>You are at the East Forest. This is a bonus stage! Find all treasures that are hidden in this map! In the next story, you are going to confront your first creature. So be prepared!" + "<br/>" + "Note: if you can't find all the hidden treasures, you won't be able to go any further.</p>";
  });
  nextMap3();
});

box4.addEventListener("click", function() {
  if (repeatFlag4 === true) {
    flagNext9 = true;
    repeatFlag4 = false;
    box4.style.opacity = 1;
    box4.style.cursor = "not-allowed";
    midPanel.style.display = "block";
    midPanel.setAttribute ("class", "general-panel mid-panel");
    pDOM.style.display = "none";
    pDOM2.style.display = "none";
    pDOM3.style.display = "none";
    pDOM4.style.display = "none";
    pDOM5.style.display = "none";
    pDOM6.style.display = "none";
    pDOM7.style.display = "none";
    optionBtn8.innerHTML = "Leave";
    optionBtn8.setAttribute("class", "button button-option option3_2");
    pDOM9.style.display = "none";
    pDOM10.style.display = "none";
    pDOM11.style.display = "none";
    pDOM12.style.display = "none";
    pDOM13.style.display = "none";
    pDOM14.style.display = "none";
    pDOM15.style.display = "none";
    pDOM16.style.display = "none";
    pDOM17.style.display = "none";
    pDOM18.style.display = "none";
    pDOM19.style.display = "block";
    optionBtn19.setAttribute("class", "tag button-image3 option4_2");
    optionBtn19.innerHTML = "<img src='DOM/images/gold.png'>";
    player1.gold += 5000;
    attributSet();
  }

  optionBtn8.addEventListener("click", function () {
    midPanel.style.display = "none";
    bottomPanelText.innerHTML = "<p>You are at the East Forest. This is a bonus stage! Find all treasures that are hidden in this map! In the next story, you are going to confront your first creature. So be prepared!" + "<br/>" + "Note: if you can't find all the hidden treasures, you won't be able to go any further.</p>";
  });
  nextMap3();
});

box5.addEventListener("click", function() {
  if (repeatFlag5 === true) {
    flagNext10 = true;
    repeatFlag5 = false;
    box5.style.opacity = 1;
    box5.style.cursor = "not-allowed";
    midPanel.style.display = "block";
    midPanel.setAttribute ("class", "general-panel mid-panel");
    pDOM.style.display = "none";
    pDOM2.style.display = "none";
    pDOM3.style.display = "none";
    pDOM4.style.display = "none";
    pDOM5.style.display = "none";
    pDOM6.style.display = "none";
    pDOM7.style.display = "none";
    optionBtn8.innerHTML = "Leave";
    optionBtn8.setAttribute("class", "button button-option option3_2");
    pDOM9.style.display = "none";
    pDOM10.style.display = "none";
    pDOM11.style.display = "none";
    pDOM12.style.display = "none";
    pDOM13.style.display = "none";
    pDOM14.style.display = "none";
    pDOM15.style.display = "none";
    pDOM16.style.display = "none";
    pDOM17.style.display = "none";
    pDOM18.style.display = "none";
    pDOM19.style.display = "block";
    optionBtn19.setAttribute("class", "tag button-image3 option1_2");
    optionBtn19.innerHTML = "<img src='DOM/images/potion_small.png'>";
    player1.item.push("Small Potion");
    attributSet();
  }

  optionBtn8.addEventListener("click", function () {
    midPanel.style.display = "none";
    bottomPanelText.innerHTML = "<p>You are at the East Forest. This is a bonus stage! Find all treasures that are hidden in this map! In the next story, you are going to confront your first creature. So be prepared!" + "<br/>" + "Note: if you can't find all the hidden treasures, you won't be able to go any further.</p>";
  });
  nextMap3();
});

box6.addEventListener("click", function() {
  if (repeatFlag6 === true) {
    flagNext11 = true;
    repeatFlag6 = false;
    box6.style.opacity = 1;
    box6.style.cursor = "not-allowed";
    midPanel.style.display = "block";
    midPanel.setAttribute ("class", "general-panel mid-panel");
    pDOM.style.display = "none";
    pDOM2.style.display = "none";
    pDOM3.style.display = "none";
    pDOM4.style.display = "none";
    pDOM5.style.display = "none";
    pDOM6.style.display = "none";
    pDOM7.style.display = "none";
    optionBtn8.innerHTML = "Leave";
    optionBtn8.setAttribute("class", "button button-option option3_2");
    pDOM9.style.display = "none";
    pDOM10.style.display = "none";
    pDOM11.style.display = "none";
    pDOM12.style.display = "none";
    pDOM13.style.display = "none";
    pDOM14.style.display = "none";
    pDOM15.style.display = "none";
    pDOM16.style.display = "none";
    pDOM17.style.display = "none";
    pDOM18.style.display = "none";
    pDOM19.style.display = "block";
    optionBtn19.setAttribute("class", "tag button-image3 option1_2");
    optionBtn19.innerHTML = "<img src='DOM/images/potion_small.png'>";
    player1.item.push("Small Potion");
    attributSet();
  }

  optionBtn8.addEventListener("click", function () {
    midPanel.style.display = "none";
    bottomPanelText.innerHTML = "<p>You are at the East Forest. This is a bonus stage! Find all treasures that are hidden in this map! In the next story, you are going to confront your first creature. So be prepared!" + "<br/>" + "Note: if you can't find all the hidden treasures, you won't be able to go any further.</p>";
  });
  nextMap3();
});

// Next Map

function nextMap() {
  if (flagNext === true && flagNext2 == true && flagNext3 == true) {
    marketDivBtnNext.style.display = "block";
    //bottomPanelText.innerHTML = "<p>After getting some information, you know that you are in a city called Lorden the Capital City of Lorsania. You have collected enough information. Now it's time to move.</p>";
  };
};

function nextMap2() {
  if (flagNext4 === true && flagNext5 == true) {
    eastGateDivBtnNext.style.display = "block";
    //bottomPanelText.innerHTML = "<p>You are now ready to go out of the city. It's time to hunt.</p>";
  };
};

function nextMap3() {
  if (flagNext6 === true && flagNext7 == true && flagNext8 == true && flagNext9 == true && flagNext10 == true && flagNext11 == true) {
    eastForestDivBtnNext.style.display = "block";
  };
};

// Notes

/*
potion
battle scene (pending)
balik kota ada event
Font: blackchancery, gin rickey
Color: 2b6ce6 (outline blue), 38e865 (color stage), b5eca4 (lebih halus dari sebelah)
*/
