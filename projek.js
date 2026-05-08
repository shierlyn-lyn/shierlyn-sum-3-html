document.getElementById('daftar').onsubmit = function(){

    var pass = document.getElementById('pass').value;
    var passcek = document.getElementById('confirm').value;
    var nama = document.getElementById('name').value;

    if (pass != passcek){
        alert("Password tidak sama!");
        return false;
    }

    localStorage.setItem("namaUser", nama);

    localStorage.removeItem("keranjang");

    alert("Pendaftaran berhasil!");
    return true;
}

function buy(nama, harga){
    var data = localStorage.getItem("keranjang");

    if (data == null){
        data = "";
    }

    data = data + nama + "," + harga + ";";

    localStorage.setItem("keranjang", data);

   alert(nama + " berhasil ditambahkan!\nHarga: Rp " + harga);
}

function bill(){
    var nama = localStorage.getItem("namaUser");
    var data = localStorage.getItem("keranjang");

    if (data == null || data == ""){
        alert("Keranjang kosong!");
        return;
    }

    var daftar = data.split(";");
    var total = 0;
    var teks = "BILL COOQUEEN PREMIUM\n";
    teks += "Nama: " + nama + "\n\n";

    for (var i = 0; i < daftar.length - 1; i++){
        var item = daftar[i].split(",");
        teks += item[0] + " - Rp " + item[1] + "\n";
		total = total + parseInt(item[1]);
    }

   teks += "\nTotal: Rp " + total;

    alert(teks);
}
