const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let tanahSebelumnya; 
let selesai;
let skor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if(tRandom == tanahSebelumnya) {
        return randomTanah(tanah); //mengulang panggil jika nilai nya sama
    } 
    tanahSebelumnya = tRandom;
    console.log(t);
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);

}

function munculkanTikus() {
    const tRandom = randomTanah(tanah)
    const wRandom = randomWaktu(800,1000);
    tRandom.classList.add('muncul');
 
    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if(!selesai) {
            munculkanTikus();
        }
    }, wRandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = skor;
    munculkanTikus();
    setTimeout(function() {
        return selesai = true;
    }, 10000);
}

function pukul() {
    skor++;
    papanSkor.textContent = skor;
    this.parentNode.classList.remove('muncul');
    pop.play();
    this.style.transition = "top 0s";
}

tikus.forEach(t => {
    t.addEventListener('click', pukul)
})