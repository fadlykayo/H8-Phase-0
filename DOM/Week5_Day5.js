// Week 5, Day 5

// Variables

var openingDiv = document.getElementById('opening');
var opening2Div = document.getElementById('opening2');
var townDiv = document.getElementById("town");
var town2Div = document.getElementById("town2");
var marketDiv = document.getElementById("market");
var eastGateDiv = document.getElementById ("east-gate");
var bottomPanelMarket = document.getElementById("bottom-panel-market");
var midPanelMarket = document.getElementById("mid-panel-market");
var midPanelMarket2 = document.getElementById("mid-panel-market2");
var midPanelMarket3 = document.getElementById("mid-panel-market3");
var midPanelMarket4 = document.getElementById("mid-panel-market4");
var flagNext = false;
var flagNext2 = false;
var flagNext3 = false;
var emotional = 0, thinking = 0, instinct = 0;
var brawler = 0, ranger = 0, healer = 0;

// Buttons

var marketDivBtnPrev = document.getElementById("market-btn-prev");
var marketDivBtnNext = document.getElementById("market-btn-next");
var npcBtn = document.getElementById("npc-tag");
var npcBtn2 = document.getElementById("npc-tag2");
var npcBtn3 = document.getElementById("npc-tag3");
var askBtn = document.getElementById("ask");
var leaveBtn = document.getElementById("leave");
var emotionalBtn = document.getElementById("emotional");
var thinkingBtn = document.getElementById("thinking");
var instinctBtn = document.getElementById("instinct");
var leaveBtn2 = document.getElementById("leave2");
var emotionalBtn2 = document.getElementById("emotional2");
var thinkingBtn2 = document.getElementById("thinking2");
var instinctBtn2 = document.getElementById("instinct2");
var leaveBtn3 = document.getElementById("leave3");
var swordBtn = document.getElementById("sword-tag");
var bowBtn = document.getElementById("bow-tag");
var staffBtn = document.getElementById("staff-tag");
var leaveBtn4 = document.getElementById("leave4");

// Init all display
openingDiv.style.display = "block";
opening2Div.style.display = "none";
townDiv.style.display = "none";
town2Div.style.display = "none";
marketDiv.style.display = "none";
eastGateDiv.style.display = "none";
//nanti diapus
midPanelMarket.style.display = "none";
midPanelMarket2.style.display = "none";
midPanelMarket3.style.display = "none";
midPanelMarket4.style.display = "none";
marketDivBtnNext.style.display = "none";

openingDiv.addEventListener("click", function () {
  openingDiv.style.display = "none";
  opening2Div.style.display = "none";
  townDiv.style.display = "block";
  town2Div.style.display = "none";
  marketDiv.style.display = "none";
  eastGateDiv.style.display = "none";
});

townDiv.addEventListener("click", function () {
  openingDiv.style.display = "none";
  opening2Div.style.display = "none";
  townDiv.style.display = "none";
  town2Div.style.display = "block";
  marketDiv.style.display = "none";
  eastGateDiv.style.display = "none";
});

town2Div.addEventListener("click", function () {
  openingDiv.style.display = "none";
  opening2Div.style.display = "none";
  townDiv.style.display = "none";
  town2Div.style.display = "none";
  marketDiv.style.display = "block";
  midPanelMarket.style.display = "none";
  midPanelMarket2.style.display = "none";
  midPanelMarket3.style.display = "none";
  midPanelMarket4.style.display = "none";
  marketDivBtnNext.style.display = "none";
  eastGateDiv.style.display = "none";
});

marketDivBtnPrev.addEventListener("click", function () {
  openingDiv.style.display = "none";
  opening2Div.style.display = "none";
  townDiv.style.display = "none";
  town2Div.style.display = "block";
  marketDiv.style.display = "none";
  eastGateDiv.style.display = "none";
});

marketDivBtnNext.addEventListener("click", function () {
  openingDiv.style.display = "none";
  opening2Div.style.display = "none";
  townDiv.style.display = "none";
  town2Div.style.display = "none";
  marketDiv.style.display = "none";
  eastGateDiv.style.display = "block";
});

npcBtn.addEventListener("click", function () {
  bottomPanelMarket.innerHTML = "<p>Vloyd - Item Merchant:" + "<br/>" + "<br/>" + "Hey, what are you looking at?!" + "<br/>" + "Are you gonna buy something?</p>";
  midPanelMarket.style.display = "block";
  midPanelMarket2.style.display = "none";
  midPanelMarket3.style.display = "none";
  midPanelMarket4.style.display = "none";
});

askBtn.addEventListener("click", function () {
  bottomPanelMarket.innerHTML = "<p>Vloyd - Item Merchant:" + "<br/>" + "<br/>" + "You are new in this town? No wonder, your face doesn't look familiar to me." + "<br/>" + "This is Lorden, the capital city of Lorsania. Although it's a beautiful place, but the life here is hard." + "<br/>" + "You need to go hunt monster outside of the city to earn gold. Otherwise you won't survive!</p>";
  flagNext = true;
  console.log("1" + flagNext);
});

leaveBtn.addEventListener("click", function () {
  bottomPanelMarket.innerHTML = "<p>This is where your adventure begin. You are in the middle of crowded place. There are a lot of people around you who are selling their stuffs. You are in a market square! What are you going to do now?</p>";
  midPanelMarket.style.display = "none";
});

npcBtn2.addEventListener("click", function () {
  bottomPanelMarket.innerHTML = "<p>Flemp and His Piggy:" + "<br/>" + "<br/>" + "Pardon me, young one. Could you help me and my little Piggy right here?" + "<br/>" + "We haven't eat for 2 days and we are very hungry." + "<br/>" + "Would you spare us some of your gold?</p>";
  midPanelMarket.style.display = "none";
  midPanelMarket2.style.display = "block";
  midPanelMarket3.style.display = "none";
  midPanelMarket4.style.display = "none";
});

emotionalBtn.addEventListener("click", function () {
  emotional++;
  flagNext2 = true;
  console.log("2" + flagNext2);
  bottomPanelMarket.innerHTML = "<p>Flemp and his Piggy:" + "<br/>" + "<br/>" + "Thank you so much young one. You have a very kind heart. Don't get lost in this big and crowded city. If you are trying to find some weak monsters, East Forest is the place you are looking for. Take care young one.</p>";
});

thinkingBtn.addEventListener("click", function () {
  thinking++;
  flagNext2 = true;
  console.log("2" + flagNext2);
  bottomPanelMarket.innerHTML = "<p>Flemp and His Piggy:" + "<br/>" + "<br/>" + "Thank you so much young one. I haven't seen you before. Are you an adventurer? You might want to find some useful items and equipments before you want to hunt some monsters in East Forest. Take care young one.</p>";
});

instinctBtn.addEventListener("click", function () {
  instinct++;
  flagNext2 = true;
  console.log("2" + flagNext2);
  bottomPanelMarket.innerHTML = "<p>Flemp and His Piggy:" + "<br/>" + "<br/>" + "It's alright, young one. Thank you for your politeness. If you might want some advice, East Forest is a good place for hunting. Take care young one.</p>";
});

leaveBtn2.addEventListener("click", function () {
  bottomPanelMarket.innerHTML = "<p>This is where your adventure begin. You are in the middle of crowded place. There are a lot of people around you who are selling their stuffs. You are in a market square! What are you going to do now?</p>";
  midPanelMarket2.style.display = "none";
});

npcBtn3.addEventListener("click", function () {
  bottomPanelMarket.innerHTML = "<p>Lory:" + "<br/>" + "<br/>" + "HeELLOoO, youngster!!" + "<br/>" + "Would you like to buy some ReEeEaAaLLyy good and strong weapons from me??" + "<br/>" + "You don't want to miss this one!</p>";
  midPanelMarket.style.display = "none";
  midPanelMarket2.style.display = "none";
  midPanelMarket3.style.display = "block";
  midPanelMarket4.style.display = "none";
});

emotionalBtn2.addEventListener("click", function () {
  emotional++;
  flagNext3 = true;
  console.log("3" + flagNext3);
  bottomPanelMarket.innerHTML = "<p>Lory:" + "<br/>" + "<br/>" + "No no no no, wait wait wait..ohh c'mon...</p>";
});

thinkingBtn2.addEventListener("click", function () {
  thinking++;
  flagNext3 = true;
  console.log("3" + flagNext3);
  bottomPanelMarket.innerHTML = "<p>Lory:" + "<br/>" + "<br/>" + "Oh, hello there! You made the correct decision, welcome!" + "<br/>" + "I have these 3 babies with me, which one do you like?</p>";
  midPanelMarket3.style.display = "none";
  midPanelMarket4.style.display = "block";
});

instinctBtn2.addEventListener("click", function () {
  instinct++;
  flagNext3 = true;
  console.log("3" + flagNext3);
  bottomPanelMarket.innerHTML = "<p>Lory:" + "<br/>" + "<br/>" + "You don't want to miss th...Oh, well well what do we have here! You have very good eyes youngster, welcome! Which one do you like?</p>";
  midPanelMarket3.style.display = "none";
  midPanelMarket4.style.display = "block";
});

leaveBtn3.addEventListener("click", function () {
  bottomPanelMarket.innerHTML = "<p>This is where your adventure begin. You are in the middle of crowded place. There are a lot of people around you who are selling their stuffs. You are in a market square! What are you going to do now?</p>";
  midPanelMarket3.style.display = "none";
});

swordBtn.addEventListener("click", function () {
  bottomPanelMarket.innerHTML = "<p>Thank you my friend! It's nice to have business with you.</p>";
  midPanelMarket4.style.display = "none";
});

bowBtn.addEventListener("click", function () {
  bottomPanelMarket.innerHTML = "<p>Thank you my friend! It's nice to have business with you.</p>";
  midPanelMarket4.style.display = "none";
});

staffBtn.addEventListener("click", function () {
  bottomPanelMarket.innerHTML = "<p>Thank you my friend! It's nice to have business with you.</p>";
  midPanelMarket4.style.display = "none";
});

leaveBtn4.addEventListener("click", function () {
  bottomPanelMarket.innerHTML = "<p>This is where your adventure begin. You are in the middle of crowded place. There are a lot of people around you who are selling their stuffs. You are in a market square! What are you going to do now?</p>";
  midPanelMarket4.style.display = "none";
});

if (flagNext === true && flagNext2 === true && flagNext3 === true) {
  console.log("sas");
  marketDivBtnNext.style.display = "block";
  bottomPanelMarket.innerHTML = "<p>After getting some information, you know that you are in a city called Lorden the Capital City of Lorsania. You have collected enough information. Now it's time to move.</p>";
}

// Tipe data object

var player = function() {
  this.name = "?";
  this.job = "?";
  this.personality = "?";
  this.gold = 0;
  this.classInfo = function(job1) {
    if (job1.toLowerCase() === "brawler") {
      return "Kamu adalah tipe penyerang jarak dekat. Kamu seorang yang pemberani. Kemampuan fisikmu melebihi orang lain.";
    }
    else if (job1.toLowerCase() === "ranger") {
      return "Kamu adalah tipe penyerang jarak jauh. Kamu seorang yang cekatan. Ketepatan dan kecepatanmu dalam menembak sangat tinggi.";
    }
    else if (job1.toLowerCase() === "healer") {
      return "Kamu adalah seorang penyembuh. Kehadiranmu sangat dibutuhkan banyak orang. Kamu dapat menolong orang yang terluka dengan kemampuanmu.";
    }
    else {
      return "Kamu adalah seorang novice. Keinginanmu masih bercabang. Belum saatnya kamu menentukan class mu.";
    }
  };
  this.charInfo = function(personal1) {
    if (personal1.toLowerCase() === "emotional") {
      return "Kamu adalah seseorang yang emosional. Kamu mengandalkan perasaanmu dalam bertindak, berkata dan berpikir.";
    }
    else if (personal1.toLowerCase() === "thinking") {
      return "Kamu adalah seorang pemikir. Kamu melakukan banyak pertimbangan dan rencana-rencana sebelum kamu melakukan sesuatu.";
    }
    else if (personal1.toLowerCase() === "instinctual"){
      return "Kamu adalah seseorang yang suka mengandalkan instingmu. Tindakan, perkataan dan keputusan yang kamu ambil didasarkan pada insting spontanmu saat itu.";
    }
    else {
      return "Jati dirimu misterius. Banyak orang tidak mengerti tentang dirimu.";
    }
  };
}

// Object player1

var player1 = new player();
player1.gold = 10000;

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
}

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
}


/*var body = document.body;

var openingDiv = document.createElement("div");
openingDiv.setAttribute("id", "opening");
body.appendChild(openingDiv);

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");
body.appendChild(mainDiv);

// main div

var marketDiv = document.createElement("div");
marketDiv.setAttribute("id", "market");
mainDiv.appendChild(marketDiv);

var eastGateDiv = document.createElement("div");
eastGateDiv.setAttribute("id", "east-gate");
mainDiv.appendChild(eastGateDiv);

var eastForestDiv = document.createElement("div");
eastForestDiv.setAttribute("id", "east-forest");
mainDiv.appendChild(eastForestDiv);

// opening div
*/
