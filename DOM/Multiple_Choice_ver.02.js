var soalArr = ["alpha", "betha", "caesar"];
var pilihanArr1 = ["a","b","c","d"];
var pilihanArr2 = ["e","f","g","h"];
var pilihanArr3 = ["i","j","k","l"];
var benarCount = 0;

var soalSpan = document.getElementById("soalArr");
var jawabanSpan = document.getElementById("jawabanArr");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var button10 = document.getElementById("button10");
var button11 = document.getElementById("button11");
var button12 = document.getElementById("button12");
var tam1, tam2, tam3, tam4;

var soal1 = document.getElementById("soal1");
var soal2 = document.getElementById("soal2");

//Return a random number between 0 and 3:

function calculate() {
  do {
    tam1 = Math.floor((Math.random() * 4));
    tam2 = Math.floor((Math.random() * 4));
    tam3 = Math.floor((Math.random() * 4));
    tam4 = Math.floor((Math.random() * 4));
  }
  while (tam1 == tam2 || tam1 == tam3 || tam1 == tam4 || tam2 == tam3 || tam2 == tam4 || tam3 == tam4);
}
calculate();

soal1.style.display = "block";
soal2.style.display = "none";
soal3.style.display = "none";

soalSpan.innerHTML = soalArr[0];
button1.innerHTML = pilihanArr1[tam1];
button2.innerHTML = pilihanArr1[tam2];
button3.innerHTML = pilihanArr1[tam3];
button4.innerHTML = pilihanArr1[tam4];

calculate();

button5.innerHTML = pilihanArr2[tam1];
button6.innerHTML = pilihanArr2[tam2];
button7.innerHTML = pilihanArr2[tam3];
button8.innerHTML = pilihanArr2[tam4];

calculate();

button9.innerHTML = pilihanArr3[tam1];
button10.innerHTML = pilihanArr3[tam2];
button11.innerHTML = pilihanArr3[tam3];
button12.innerHTML = pilihanArr3[tam4];

jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;

button1.addEventListener("click", function () {
  if (button1.innerHTML == "a") {
    benarCount++;
  }
  console.log("Benar Count: " + benarCount);
  soal1.style.display = "none";
  soal2.style.display = "block";
  soal3.style.display = "none";
  soalSpan.innerHTML = soalArr[1];
  jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
});

button2.addEventListener("click", function () {
   if (button2.innerHTML == "a") {
    benarCount++;
  }
  console.log("Benar Count: " + benarCount);
  soal1.style.display = "none";
  soal2.style.display = "block";
  soal3.style.display = "none";
  soalSpan.innerHTML = soalArr[1];
  jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
});

button3.addEventListener("click", function () {
   if (button3.innerHTML == "a") {
    benarCount++;
  }
  console.log("Benar Count: " + benarCount);
  soal1.style.display = "none";
  soal2.style.display = "block";
  soal3.style.display = "none";
  soalSpan.innerHTML = soalArr[1];
  jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
});

button4.addEventListener("click", function () {
   if (button4.innerHTML == "a") {
    benarCount++;
  }
  console.log("Benar Count: " + benarCount);
  soal1.style.display = "none";
  soal2.style.display = "block";
  soal3.style.display = "none";
  soalSpan.innerHTML = soalArr[1];
  jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
});

button5.addEventListener("click", function () {
   if (button5.innerHTML == "e") {
    benarCount++;
  }
  console.log("Benar Count: " + benarCount);
  soal1.style.display = "none";
  soal2.style.display = "none";
  soal3.style.display = "block";
  soalSpan.innerHTML = soalArr[2];
  jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
});

button6.addEventListener("click", function () {
   if (button6.innerHTML == "e") {
    benarCount++;
  }
  console.log("Benar Count: " + benarCount);
  soal1.style.display = "none";
  soal2.style.display = "none";
  soal3.style.display = "block";
  soalSpan.innerHTML = soalArr[2];
  jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
});

button7.addEventListener("click", function () {
   if (button7.innerHTML == "e") {
    benarCount++;
  }
  console.log("Benar Count: " + benarCount);
  soal1.style.display = "none";
  soal2.style.display = "none";
  soal3.style.display = "block";
  soalSpan.innerHTML = soalArr[2];
  jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
});

button8.addEventListener("click", function () {
   if (button8.innerHTML == "e") {
    benarCount++;
  }
  console.log("Benar Count: " + benarCount);
  soal1.style.display = "none";
  soal2.style.display = "none";
  soal3.style.display = "block";
  soalSpan.innerHTML = soalArr[2];
  jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
});

button9.addEventListener("click", function () {
   if (button9.innerHTML == "i") {
    benarCount++;
  }
  console.log("Benar Count: " + benarCount);
  jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
  button9.style.display = "none";
  button10.style.display = "none";
  button11.style.display = "none";
  button12.style.display = "none";
});

button10.addEventListener("click", function () {
   if (button10.innerHTML == "i") {
    benarCount++;
  }
  console.log("Benar Count: " + benarCount);
  jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
  button9.style.display = "none";
  button10.style.display = "none";
  button11.style.display = "none";
  button12.style.display = "none";
});

button11.addEventListener("click", function () {
   if (button11.innerHTML == "i") {
    benarCount++;
  }
  console.log("Benar Count: " + benarCount);
  jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
  button9.style.display = "none";
  button10.style.display = "none";
  button11.style.display = "none";
  button12.style.display = "none";
});

button12.addEventListener("click", function () {
   if (button12.innerHTML == "i") {
    benarCount++;
  }
  console.log("Benar Count: " + benarCount);
  jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
  button9.style.display = "none";
  button10.style.display = "none";
  button11.style.display = "none";
  button12.style.display = "none";
});
