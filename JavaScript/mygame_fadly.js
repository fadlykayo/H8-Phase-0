// Tugas: cerita petualangan interaktif

// Tipe data object

var player = function() {
  this.name = "";
  this.job = "";
  this.personality = "";
  this.classInfo = function(job1) {
    if (job1.toLowerCase() === "brawler") {
      return "Kamu adalah tipe penyerang jarak dekat. Kamu seorang yang pemberani. Kemampuan fisikmu melibihi orang lain.";
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

// Else if untuk menentukan tipe job

var brawler = 0, ranger = 0, healer = 0;

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

var emotional = 0, thinking = 0, instinct = 0;

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

function a() {
  instinct++;
  choosePersona();
}

function b() {
  emotional++;
  choosePersona();
}

function c() {
  thinking++;
  choosePersona();
}
function d() {
  brawler++;
  chooseJob();
}
function e() {
  healer++;
  chooseJob();
}
function f() {
  ranger++;
  chooseJob();
}

// Fungsi dari kumpulan pertanyaan + ending

function pertanyaan1() {
  document.getElementById("changeable").innerHTML = "Saat kamu membuka matamu, kamu berada di tengah keramaian. Banyak orang-orang di sekitar mu yang berjualan dan berteriak-teriak. Kamu berada di tengah keramaian pasar! Apa yang akan kamu lakukan pertama kali?";
  var ask1 = ["Melihat sekeliling dan pergi ke mana instingmu menuntunmu",
              "Kamu merasa khawatir karena kamu tidak tau di mana kamu berada. Kamu menghampiri salah satu pedagang dan bertanya-tanya kepadanya",
              "Kamu mengamati keadaanmu dan sekitar, lalu merencanakan dengan matang apa yang akan kamu lakukan berikutnya"];
  for(var i = 0; i < ask1.length; i++) {
    var j = i+1;
    document.getElementById("changeable").innerHTML += "<br/>" + "<br/>" + j + ". " + ask1[i];
  }
  document.getElementById("changeable").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='a()'>No. 1</button> <button type='button' class='button2 button1' onclick='b()'>No. 2</button> <button type='button' class='button2 button1' onclick='c()'>No. 3</button></p>";
  document.getElementById("changeable").innerHTML += "<p><button type='button' class='button button1' onclick='pertanyaan2()'>Next</button></p>";
}

function pertanyaan2() {
  document.getElementById("changeable").innerHTML = "Setelah kamu mendapatkan informasi, ternyata kamu berada di kota bernama Lorden yang merupakan ibu kota dari kerajaan Lorsania. Karena kamu menghabiskan banyak waktu untuk mencari informasi, perutmu terasa lapar. Namun kamu tidak memiliki uang. Apa yang akan kamu lakukan selanjutnya?";
  var ask2 = ["Kamu melihat seseorang lewat di depan mu dan menggiring tanduk monster. Kamu pergi ke luar gerbang kota dan ikut berburu monster.",
              "Kamu merasa takut untuk pergi berburu karena kamu tidak mempunyai senjata. Kamu menghampiri seseorang dan meminta tolong kepadanya.",
              "Kamu tahu ada banyak monster di luar gerbang kota. Tetapi kamu pergi menyiapkan senjata terlebih dahulu sebelum pergi berburu. Ada banyak senjata tidak terpakai di jalanan."];
  for(var i = 0; i < ask2.length; i++) {
    var j = i+1;
    document.getElementById("changeable").innerHTML += "<br/>" + "<br/>" + j + ". " + ask2[i];
  }
  document.getElementById("changeable").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='a()'>No. 1</button> <button type='button' class='button2 button1' onclick='b()'>No. 2</button> <button type='button' class='button2 button1' onclick='c()'>No. 3</button></p>";
  document.getElementById("changeable").innerHTML += "<p><button type='button' class='button button1' onclick='pertanyaan3()'>Next</button></p>";
}

function pertanyaan3() {
  document.getElementById("changeable").innerHTML = "Setelah kamu sampai di luar. Kamu di hampiri oleh seseorang yang baik hati dan menawarkanmu 3 macam senjata: pedang, panah dan tongkat penyembuh. Senjata mana yang kamu pilih?";
  var ask3 = ["Pedang", "Panah", "Tongkat Penyembuh"];
  for(var i = 0; i < ask3.length; i++) {
    var j = i+1;
    document.getElementById("changeable").innerHTML += "<br/>" + "<br/>" + j + ". " + ask3[i];
  }
  document.getElementById("changeable").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='d()'>No. 1</button> <button type='button' class='button2 button1' onclick='f()'>No. 2</button> <button type='button' class='button2 button1' onclick='e()'>No. 3</button></p>";
  document.getElementById("changeable").innerHTML += "<p><button type='button' class='button button1' onclick='pertanyaan4()'>Next</button></p>";
}

function pertanyaan4() {
  document.getElementById("changeable").innerHTML = "Setelah beberapa lama kamu berburu, kamu melihat keramaian di kejauhan dan banyak orang yang melarikan diri. Ternyata ada monster raksasa (boss) yang sedang mengamuk ke arah kota. Apa yang akan kamu lakukan?";
  var ask4 = ["Kamu menerjang keramaian dan menuju ke arah monster tersebut dan berupaya untuk menghalaunya.",
              "Kamu pergi menuju ke arah monster tersebut sambil mengambil jarak aman dan mulai menyerang monster tersebut dari kejauhan.",
              "Kamu menghampiri orang-orang yang terluka dan menyembuhkannya."];
  for(var i = 0; i < ask4.length; i++) {
    var j = i+1;
    document.getElementById("changeable").innerHTML += "<br/>" + "<br/>" + j + ". " + ask4[i];
  }
  document.getElementById("changeable").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='d()'>No. 1</button> <button type='button' class='button2 button1' onclick='f()'>No. 2</button> <button type='button' class='button2 button1' onclick='e()'>No. 3</button></p>";
  document.getElementById("changeable").innerHTML += "<p><button type='button' class='button button1' onclick='pertanyaan5()'>Next</button></p>";
}

function pertanyaan5() {
  document.getElementById("changeable").innerHTML = "Kamu dan banyak orang lainnya berhasil menghalau monster tersebut dari kota. Banyak orang menghampirimu dan berterima kasih kepadamu atas pertolonganmu. Kamu sekarang lelah setelah lama berburu. Apa yang akan kamu lakukan selanjutnya?";
  var ask5 = ["Kamu mencium bau harum yang muncul dari dalam kota. Kamu pergi mencari sumber bau harum tersebut.",
              "Kamu menghampiri orang-orang yang turut membantu menghalau monster tadi dan mengucapkan terima kasih kepada mereka. Kamu merasa tanpa bantuan mereka kamu tidak akan selamat. Kamu merasa sangat senang dan ingin berkenalan dengan mereka sejenak.",
              "Kamu mengumpulkan hasil buruanmu dan mulai menghitungnya, lalu kamu pergi ke kota untuk menjualnya dan berencana untuk mencari makan setelah itu."];
  for(var i = 0; i < ask5.length; i++) {
    var j = i+1;
    document.getElementById("changeable").innerHTML += "<br/>" + "<br/>" + j + ". " + ask5[i];
  }
  document.getElementById("changeable").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='a()'>No. 1</button> <button type='button' class='button2 button1' onclick='b()'>No. 2</button> <button type='button' class='button2 button1' onclick='c()'>No. 3</button></p>";
  document.getElementById("changeable").innerHTML += "<p><button type='button' class='button button1' onclick='endStory()'>Next</button></p>";
}

function endStory() {
  document.getElementById("changeable").innerHTML = "Terima kasih atas partisipasimu memainkan Part 1 dari game ini." + "<br/>" + "<br/>" +"Berdasarkan hasil sementara, inilah informasi mengenai dirimu: " + "<br/>" + "<br/>" +"Class kamu adalah: " + player1.job + ". " + player1.classInfo(player1.job) + "<br/>" + "<br/>" +"Kamu adalah tipe personality: " + player1.personality + ". " + player1.charInfo(player1.personality);
}
