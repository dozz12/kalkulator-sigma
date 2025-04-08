const layar = document.getElementById("layar");

function tambahAngka(angka) {
  layar.value += angka;
}

function hitung() {
  try {
    layar.value = eval(layar.value);
  } catch {
    layar.value = "Error";
  }
}

function hapus() {
  layar.value = "";
}

function hapusKarakter() {
  layar.value = layar.value.slice(0, -1);
}
