/*
  Pseudocode 1

  Tugas 1:
BACA dan SIMPAN "angka pertama"
BACA dan SIMPAN "angka kedua"
HITUNG "angka pertama" dikali "angka kedua"
SIMPAN hasil hitungannya
TAMPILKAN hasil hitungan

Tugas 2:

READ and SAVE "sebuah kata"
IF "sebuah kata" = "Saya Belajar JavaScript!" THEN
  SHOW "Pasti Bisa!"
ENDIF

alternative:

INPUT user inputs some words
STORE the user's input in the sebuahKalimat variable
IF sebuahKalimat = "Saya Belajar JavaScript!" THEN
  OUTPUT "Pasti Bisa!"

Tugas 3:

INPUT user inputs a number
STORE the user's input in the sebuahAngka variable
FOR 1 < i <= sebuahAngka
  IF i % 3 = 0 THEN
    OUTPUT i
  ENDIF
ENDFOR

*/

// Pseudocode 2

// Tugas 1
/*
nama = "K";
angkaPembilang = 3;
angkaPenyebut = 9;
*/
var nama, angkaPembilang, angkaPenyebut, hasilBagi;
nama = prompt("Nama Anda: ");
angkaPembilang = prompt("Angka Pembilang: ");
angkaPenyebut = prompt("Angka Penyebut: ");
hasilBagi = angkaPembilang / angkaPenyebut;
console.log("Halo " + nama + ", " + angkaPembilang + " dibagi " + angkaPenyebut + " adalah sama dengan " + hasilBagi);

// Tugas 2
/*
alas = 3;
tinggi = 9;
*/
var alas, tinggi, luasSegitiga;
alas = prompt("Alas: ");
tinggi = prompt("Tinggi: ");
luasSegitiga = (0.5) * alas * tinggi;
console.log("Luas Segitiga: " + luasSegitiga);

// Tugas 3
/*
tahun = 2000;
*/
var tahun;
tahun = prompt("Tahun: ");
if (tahun % 4 == 0) {
  if (tahun % 100 != 0) {
    console.log(tahun + " adalah tahun kabisat");
  }
  else {
    if (tahun % 400 == 0) {
      console.log(tahun + " adalah tahun kabisat");
    }
    else {
      console.log(tahun + " adalah bukan tahun kabisat");
    }
  }
}
else {
  console.log(tahun + " adalah bukan tahun kabisat");
}

// Pseudocode 3

// Tugas 1

var total = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    total += i;
    console.log("TOTAL: " + total);
  }
  else {
    total -= i;
    console.log("TOTAL: " + total);
  }
}
console.log("TOTAL: " + total);

// Tugas 2

var pagar = "";
for (var i = 1; i <= 10; i++) {
  for (var j = 0; j <= 10; j++) {
    pagar += "#";
  }
  console.log(pagar);
  pagar = "";
}

// Tugas 3

var bintang = "";
for (var i = 1; i <= 10; i++) {
  for (var j = 0; j <= i; j++) {
    bintang += "*";
  }
  console.log(bintang);
  bintang = "";
}

// Proxytia to the next level

alert("Welcome to Proxytia!");

var nama = prompt("Nama: ");
var peran = prompt("Peran: ");
var tahunLahir = prompt("Tahun Lahir: ");
var umur = 2016 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

if (nama == "") {
  console.log("Nama tidak boleh kosong!");
  peran = "kacung1";
}
else {
  console.log("Selamat datang di Dunia Proxytia, " + nama);
}

if (peran == "") {
  console.log("Pilih peranmu untuk memulai game!");
}
/*else if ((peran != '') && (nama == '')) {
  console.log("Peran error. Isi nama mu terlebih dahulu!");
}*/
else if (peran.toLowerCase() == "ksatria") {
  console.log("Halo " + peran.toLowerCase() + " " + nama + ", kamu dapat menyerang dengan senjatamu!");
}
else if (peran.toLowerCase() == "tabib") {
  console.log("Halo " + peran.toLowerCase() + " " + nama + ", kamu akan membantu temanmu yang terluka!");
}
else if (peran.toLowerCase() == "penyihir") {
  console.log("Halo " + peran.toLowerCase() + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
}
else if (peran.toLowerCase() == "kacung1") {
  console.log("Peranmu adalah kacung. Kamu tidak mengisi namamu!");
}
else if (peran.toLowerCase() == "kacung") {
  console.log("Peranmu adalah kacung. Mengapa kamu memilih peran ini?");
}
else {
  console.log ("Peran mu salah. Pilih peran: Ksatria, Tabib, Penyihir.");
}

for (var i = 1; i <= tahunLahir; i++) {
  if (i % umur == 0) {
    console.log(peran + ' ' + nama + ' menyerang monster!');
    monsterHealth -= umur;
  }
  else if (i % kodeMonster == 0) {
    console.log('monster menyerang ' + peran + ' ' + nama + '!');
    playerHealth -= kodeMonster;
  }
  else if (i % kodeMonster == 0 && i % umur == 0) {
    console.log('Health keduanya bertambah');
    playerHealth += kodeMonster;
    monsterHealth += umur;
  }
}

if (playerHealth > monsterHealth) {
  console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
}
else {
  console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}

// While loop

var i = 0;
while (i < 20) {
  i += 2;
  console.log(i + " - " + "I love coding");
}

var j = 22;
while (j > 2) {
  j -= 2;
  console.log(j + " - " + "I love coding");
}

// Mengenal Function

// Tugas 1
function shoutOut() {
  return "Halo Function!";
}

console.log(shoutOut()); // Menampilkan "Halo Function!" di console

// Tugas 2
function calculateMultiply(angka1, angka2) {
  return angka1 * angka2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

// Tugas 3
function processSentence(nama, umur, alamat, hobi) {
  var kalimatLengkap = "Nama saya " + nama + ", umur saya " + umur + " tahun, alamat saya di " + alamat + ", dan saya punya hobby yaitu " + hobi + "!";
  return kalimatLengkap;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
