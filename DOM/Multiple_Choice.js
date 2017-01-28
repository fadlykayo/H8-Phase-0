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

soalSpan.innerHTML = soalArr[0];
jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;

function showSoal1() {
  soal1.style.display = "block";
  soal2.style.display = "none";
  soal3.style.display = "none";
  if (soalSpan.innerHTML == soalArr[0]) {
    button1.innerHTML = pilihanArr1[tam1];
    button2.innerHTML = pilihanArr1[tam2];
    button3.innerHTML = pilihanArr1[tam3];
    button4.innerHTML = pilihanArr1[tam4];

    button1.addEventListener("click", function () {
      if (button1.innerHTML == "a") {
        benarCount++;
      }
      soalSpan.innerHTML = soalArr[1]
      jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
      showSoal2();
    });

    button2.addEventListener("click", function () {
      if (button2.innerHTML == "a") {
        benarCount++;
      }
      soalSpan.innerHTML = soalArr[1]
      jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
      showSoal2();
    });

    button3.addEventListener("click", function () {
      if (button3.innerHTML == "a") {
        benarCount++;
      }
      soalSpan.innerHTML = soalArr[1]
      jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
      showSoal2();
    });

    button4.addEventListener("click", function () {
      if (button4.innerHTML == "a") {
        benarCount++;
      }
      soalSpan.innerHTML = soalArr[1]
      jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
      showSoal2();
    });
  }
}
showSoal1();
calculate();

function showSoal2() {
  soal1.style.display = "none";
  soal2.style.display = "block";
  soal3.style.display = "none";
  if (soalSpan.innerHTML == soalArr[1]) {
    button1.innerHTML = pilihanArr2[tam1];
    button2.innerHTML = pilihanArr2[tam2];
    button3.innerHTML = pilihanArr2[tam3];
    button4.innerHTML = pilihanArr2[tam4];

    button1.addEventListener("click", function () {
      if (button1.innerHTML == "e") {
        benarCount++;
      }
      soalSpan.innerHTML = soalArr[2]
      jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
      showSoal3();
    });

    button2.addEventListener("click", function () {
      if (button2.innerHTML == "e") {
        benarCount++;
      }
      soalSpan.innerHTML = soalArr[2]
      jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
      showSoal3();
    });

    button3.addEventListener("click", function () {
      if (button3.innerHTML == "e") {
        benarCount++;
      }
      soalSpan.innerHTML = soalArr[2]
      jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
      showSoal3();
    });

    button4.addEventListener("click", function () {
      if (button4.innerHTML == "e") {
        benarCount++;
      }
      soalSpan.innerHTML = soalArr[2]
      jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
      showSoal3();
    });
  }
}

function showSoal3() {
  calculate();
  soal1.style.display = "none";
  soal3.style.display = "block";
  soal2.style.display = "none";
  if (soalSpan.innerHTML == soalArr[2]) {
    button1.innerHTML = pilihanArr3[tam1];
    button2.innerHTML = pilihanArr3[tam2];
    button3.innerHTML = pilihanArr3[tam3];
    button4.innerHTML = pilihanArr3[tam4];

    button1.addEventListener("click", function () {
      if (button1.innerHTML == "i") {
        benarCount++;
        benarCount--;
      }
      console.log("Benar Count: " + benarCount);
      button1.style.display = "none";
      button2.style.display = "none";
      button3.style.display = "none";
      button4.style.display = "none";
      jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
    });

    button2.addEventListener("click", function () {
      if (button2.innerHTML == "i") {
        benarCount++;
        benarCount--;
      }
      console.log("Benar Count: " + benarCount);
      button1.style.display = "none";
      button2.style.display = "none";
      button3.style.display = "none";
      button4.style.display = "none";
      jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
    });

    button3.addEventListener("click", function () {
      if (button3.innerHTML == "i") {
        benarCount++;
        benarCount--;
      }
      console.log("Benar Count: " + benarCount);
      button1.style.display = "none";
      button2.style.display = "none";
      button3.style.display = "none";
      button4.style.display = "none";
      jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
    });

    button4.addEventListener("click", function () {
      if (button4.innerHTML == "i") {
        benarCount++;
        benarCount--;
      }
      console.log("Benar Count: " + benarCount);
      button1.style.display = "none";
      button2.style.display = "none";
      button3.style.display = "none";
      button4.style.display = "none";
      jawabanArr.innerHTML = "Jumlah jawaban benar: " + benarCount;
    });
  }
}
