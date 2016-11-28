// Object 1

var Mobil = function(pabrikan, model, warna) {
  this.pabrikan = pabrikan;
  this.model = model;
  this.warna = warna;
  this.maju = function() {
  console.log("Mobil " + this.pabrikan + " " + this.model + " " + this.warna + " , bergerak maju!");
  };
}

var mobilku = new Mobil('Tesla', 'Ludicrous', 'Merah');
mobilku.maju();
//output: Mobil Tesla Ludicrous Merah , bergerak maju!

var mobil1 = new Mobil('Honda', 'Accord', 'Hitam');
var mobil2 = new Mobil('Honda', 'Civic', 'Silver');

console.log('Mobil 1 adalah ', mobil1.pabrikan, mobil1.model, mobil1.warna);
mobil1.maju();
mobil1.warna = 'Silver';
mobil1.maju();
console.log('Mobil 2 adalah', mobil2.pabrikan, mobil2.model, mobil2.warna);
mobil2.maju();

// Object 2

var Teman = function(nama, kabar, pekerjaan) {
  this.nama = nama;
  this.kabar = kabar;
  this.pekerjaan = pekerjaan;
  this.sapa = function(nama2) { // nama2 = parameter dari luar yg berbentuk string
    console.log("Halo " + nama2 + ", apa kabar?");
  };
  this.balasSapa = function(nama3) {
    console.log("Halo " + nama3 + ", kabarku " + this.kabar); // this.kabar = object property dari dalam yang memanggil function balasSapa -> this
  };
  this.tanyaPekerjaan = function() {
    console.log("Apa pekerjaanmu saat ini?");
  };
  this.balasPekerjaan = function() {
    console.log("Pekerjaanku saat ini adalah " + this.pekerjaan);
  };
  this.berpisah = function(object) {
    console.log("Senang bertemu denganmu " + object.nama + ", semoga kamu sukses sebagai " + object.pekerjaan);
  }; // object.nama = object property dari luar yg menjadi parameter
}

var budi = new Teman('Budi', 'baik', 'developer');
var tono = new Teman('Tono', 'baik', 'chef');

budi.sapa(tono.nama);
tono.balasSapa(budi.nama);
budi.tanyaPekerjaan();
tono.balasPekerjaan();
budi.berpisah(tono);

// JSON

var arr =
[
  {"hari":"Senin", "kehadiran":"Masuk", "alasan":""}, // objek1
  {"hari":"Rabu", "kehadiran":"Masuk", "alasan":""}, // objek2
  {"hari":"Jumat", "kehadiran":"Absen", "alasan":"Dinas Luar"},//objek3
];

var jmlHari = "", jmlHadir = "", jmlTdkHadir = "";
for(var i = 0; i < arr.length; i++) {
  console.log("Hari: " + arr[i].hari);
  console.log("Kehadiran: " + arr[i].kehadiran);
  if(arr[i].kehadiran.toLowerCase() == "absen") {
    console.log("Alasan: " + arr[i].alasan);
    console.log("");
    jmlTdkHadir++;
  }
  else {
    console.log("");
    jmlHadir++
  }
  if((arr[i].hari.toLowerCase() != "sabtu") && (arr[i].hari.toLowerCase() != "minggu")) {
    jmlHari++;
  }
}

console.log("Total hari kerja minggu ini: " + jmlHari + " hari");
console.log("Total Masuk: " + jmlHadir + " hari");
console.log("Total Tidak Masuk: " + jmlTdkHadir + " hari");

/*
var arr =
[{
  "jsonObject":
  [
    {"hari":"Senin", "kehadiran":"Masuk", "alasan":""},
    {"hari":"Rabu", "kehadiran":"Masuk", "alasan":""},
    {"hari":"Jumat", "kehadiran":"Absen", "alasan":"Dinas Luar"},
  ]
}]
*/
