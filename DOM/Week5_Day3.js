// Week 5, Day 3

var mainForm = document.getElementById("main-form");

mainForm.addEventListener("submit", function (event) {
  event.preventDefault(); //mencegah untuk action ke page lain
  if (document.getElementById("username").value == "") {
    alert("Username tidak boleh kosong!");
    return false;
  }
  else if (document.getElementById("password").value == "") {
    alert("Password tidak boleh kosong!");
    return false;
  }
  else if (document.getElementById("confirm-password").value == "") {
    alert("Password Confirmation tidak boleh kosong!");
    return false;
  }
  else if (document.getElementById("email").value == "") {
    alert("Email tidak boleh kosong!");
    return false;
  }
  else if (document.getElementById("password").value == "") {
    alert("Email Confirmation tidak boleh kosong!");
    return false;
  }
  else if (document.getElementById("password").value != document.getElementById("confirm-password").value) {
    alert("Password tidak sama dengan Confirmation.");
    return false;
  }
  else if (document.getElementById("email").value != document.getElementById("confirm-email").value) {
    alert("Email tidak sama dengan Confirmation.");
    return false;
  }
  else if (document.getElementById("username").value.length < 5) {
    alert("Jumlah karakter Username minimal 5!");
    return false;
  }
  else if (document.getElementById("password").value.length < 6) {
    alert("Jumlah karakter Password minimal 6!");
    return false;
  }
  else {
    document.getElementById("field").innerHTML = "Selamat, registrasi anda telah berhasil!";
    document.getElementById("field").innerHTML += "<br/>" + "<br/>" + "Kembali ke halaman " + "<a href='Week5_Day3.html'>sebelumnya</a>";
    return true;
  }
});
