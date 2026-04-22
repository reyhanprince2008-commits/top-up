// 1. DATABASE DATA GAME & NOMINAL
const gameData = {
    'Mobile Legends': [
        {q: '86 Diamonds', p: 'Rp 20.000'},
        {q: '172 Diamonds', p: 'Rp 40.000'},
        {q: '257 Diamonds', p: 'Rp 60.000'},
        {q: '706 Diamonds', p: 'Rp 160.000'}
    ],
    'Free Fire': [
        {q: '140 Diamonds', p: 'Rp 19.500'},
        {q: '355 Diamonds', p: 'Rp 46.000'},
        {q: '720 Diamonds', p: 'Rp 90.000'}
    ],
    'Honor of Kings': [
        {q: '80 Tokens', p: 'Rp 15.000'},
        {q: '240 Tokens', p: 'Rp 43.000'},
        {q: '480 Tokens', p: 'Rp 85.000'}
    ],
    'Roblox': [
        {q: '400 Robux', p: 'Rp 78.000'},
        {q: '800 Robux', p: 'Rp 150.000'}
    ]
};

let selectedItem = null;

// 2. FUNGSI PILIH GAME (Pindah Halaman)
function selectGame(game) {
    // Sembunyikan menu utama, munculkan form
    document.getElementById('game-selection').classList.add('hidden');
    document.getElementById('topup-form').classList.remove('hidden');
    
    // Set judul game yang dipilih
    document.getElementById('selected-game-title').innerText = game;
    
    // Reset data sebelumnya
    selectedItem = null;
    document.getElementById('userid').value = '';
    document.getElementById('nickname-display').classList.add('hidden');
    
    // Jalankan fungsi buat nampilin Diamond
    renderItems(game);
}

// 3. FUNGSI KEMBALI KE HOME
function backToHome() {
    document.getElementById('game-selection').classList.remove('hidden');
    document.getElementById('topup-form').classList.add('hidden');
}

// 4. FUNGSI TAMPILKAN NOMINAL (DIAMOND) - INI YANG TADI ERROR
function renderItems(game) {
    const list = document.getElementById('item-list');
    list.innerHTML = ""; // Kosongkan dulu isinya
    
    if (gameData[game]) {
        gameData[game].forEach(item => {
            const div = document.createElement('div');
            div.className = 'item-card';
            
            // Mengisi kotak diamond dengan data dari gameData
            div.innerHTML = `
                <div style="font-weight: bold;">${item.q}</div>
                <small style="color: #cbd5e1;">${item.p}</small>
            `;
            
            // Logika saat kotak diamond diklik
            div.onclick = () => {
                document.querySelectorAll('.item-card').forEach(e => e.classList.remove('active'));
                div.classList.add('active');
                selectedItem = item; // Simpan diamond yang dipilih
            };
            
            list.appendChild(div);
        });
    }
}

// 5. FITUR CEK NICKNAME (GIMMICK)
document.getElementById('userid').addEventListener('input', function() {
    const nickBox = document.getElementById('nickname-display');
    if (this.value.length >= 5) {
        nickBox.classList.remove('hidden');
        nickBox.innerText = "⏳ Mengecek ID...";
        
        setTimeout(() => {
            nickBox.innerHTML = `✅ Nickname: <strong>Player_Ganteng_${this.value.slice(-3)}</strong>`;
        }, 1000);
    } else {
        nickBox.classList.add('hidden');
    }
});

// 6. TOMBOL BELI SEKARANG
document.getElementById('btn-buy').onclick = () => {
    const uid = document.getElementById('userid').value;
    const payment = document.querySelector('input[name="pay"]:checked');

    if (!uid) return alert("Masukkan User ID dulu!");
    if (!selectedItem) return alert("Pilih nominal Diamond dulu!");
    if (!payment) return alert("Pilih metode pembayaran dulu!");

    alert(`
        PESANAN BERHASIL (SIMULASI)
        --------------------------
        ID Game: ${uid}
        Nominal: ${selectedItem.q}
        Harga  : ${selectedItem.p}
        Bayar  : ${payment.value}
        
        Terima kasih sudah mencoba!
    `);
};
// --- CARA MENAMBAH NOMINAL ---
// Cukup tambahkan baris {q: 'Jumlah', p: 'Harga'} di dalam kurung siku [ ]
// Contoh saya tambahkan nominal besar untuk ML:

gameData['Mobile Legends'] = [
    {q: '86 Diamonds', p: 'Rp 20.000'},
    {q: '172 Diamonds', p: 'Rp 40.000'},
    {q: '257 Diamonds', p: 'Rp 60.000'},
    {q: '706 Diamonds', p: 'Rp 160.000'},
    {q: '1412 Diamonds', p: 'Rp 320.000'}, // Tambahan baru
    {q: '2194 Diamonds', p: 'Rp 480.000'}, // Tambahan baru
    {q: 'Starlight Member', p: 'Rp 30.000'} // Contoh kategori lain
];

// Kamu bisa lakukan hal yang sama untuk 'Free Fire', 'Roblox', dll.
// gameData['Free Fire'].push({q: '1000 Diamonds', p: 'Rp 150.000'});

// Fitur Search Game Gimmick
function searchGame() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let gameItems = document.querySelectorAll('.game-item');
    
    gameItems.forEach(item => {
        let gameName = item.querySelector('p').innerText.toLowerCase();
        if (gameName.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
// Cari bagian addEventListener 'userid' dan ganti bagian Nickname-nya:

document.getElementById('userid').addEventListener('input', function() {
    const nickBox = document.getElementById('nickname-display');
    if (this.value.length >= 5) {
        nickBox.classList.remove('hidden');
        nickBox.style.background = "#e62429"; // Warna merah pas muncul
        nickBox.innerText = "🕸️ Menembakkan Jaring...";
        
        setTimeout(() => {
            nickBox.innerHTML = `🕷️ Hero Found: <strong>Spidey_${this.value.slice(-3)}</strong>`;
        }, 1000);
    } else {
        nickBox.classList.add('hidden');
    }
});