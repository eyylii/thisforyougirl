// Fungsi untuk pindah halaman
function bukaHalaman(nomor){
    var semuaHalaman = document.getElementsByClassName("halaman");

    for(var i=0; i<semuaHalaman.length; i++){
        semuaHalaman[i].classList.remove("aktif");
    }

    document.getElementById("hal"+nomor).classList.add("aktif");
}

// Fungsi random pesan
function randomPesan(){
    var pesan = [
        "Semoga semua impianmu tercapai ✨",
        "Jangan lupa bahagia setiap hari 🤍",
        "Kamu orang yang spesial 💖",
        "Semoga tahun ini lebih indah 🌸"
    ];

    var acak = Math.floor(Math.random() * pesan.length);
    document.getElementById("randomText").innerHTML = pesan[acak];
}

function emojiPesan(teks){
    alert(teks);
}
