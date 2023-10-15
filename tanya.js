var ulang = true;
while(ulang){
var eri = "Eri Maulana";
var nama = prompt('Siapa Nama Kamu ?');
alert('Hai ' + nama );

var kenal = confirm('apakah '+ nama +' kenal dengan '+ eri +' ?');
    if (kenal == false){
        alert('ah masa iya ? yakin nih ? ');
        alert('coba ulangi lagi');
        kenal = confirm('apakah '+ nama +' kenal dengan '+ eri +' ?');
        alert("Yakk pasti kenal lah , orang aku tau kamu sekarang lagi mikirin si " + eri +" sekarang wkwkwk");
        alert('Soal nya Ada pesan dari ' + eri + ' untuk ' + nama ) ;
    }else{
        alert("Yakk masa ga kenal , orang aku tau kamu sekarang lagi mikirin si " + eri);
        alert('Soal nya Ada pesan dari ' + eri + ' untuk ' + nama ) ;
    }
var pesan = confirm('mau aku liatin pesan nya ga?');
    if(pesan == false){
        alert('mending buka dulu , nanti nyesel loh klo ga di buka wkwk');
        pesan = confirm('mau aku liatin pesan nya ga?');
        alert("dia bilang Dia Kangen Sama Kamu wkwkwk");
    } else{
        alert("dia bilang Dia Kangen Sama Kamu wkwkwk");
    }
var pesanBalik = confirm('Mau titip pesan balik ga ? ');
    if(pesanBalik == false){
        alert(`yaudah gapapa klo malu mah biar aku wakilin`);
        alert('nanti aku bilangin I Love You ke si ' + eri + " yak wkwk");
        alert('bentar dia lagi mengetik mau bales');
        alert('tuh dia bilang I Love You Too Katanya wkwkwk')
    } else {
        confirm('Mau bilang Kangen tapi malu ? gapapa bilang aja nanti dia juga respon balik kok');
        alert('tuhkn bener... langsung fast respon');
        alert('tuh dia bilang\nDia Juga Kangen sama ' + nama );
        alert('tuh dia ngetik lagi ....');
        alert('Dia bilang I Love You ');
    }
ulang = confirm('gak yakin sama jawaban ' + nama + ' barusan ?\nYaudah ulang lagi aja dengan klik tombol "OK"\ndan kalo udah ikhlas menerima hasil dari jawaban ' + nama + ' barusan klik tombol "CANCEL" yak :v wkwkwk ');
}

