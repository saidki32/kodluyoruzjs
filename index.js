// Enter tuşu ile giriş yapma
document.getElementById('nameInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        showWelcome();
    }
});

// Karşılama ekranını göster
function showWelcome() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    
    if (name === '') {
        alert('Lütfen isminizi girin!');
        return;
    }
    
    // Giriş bölümünü gizle
    document.getElementById('inputSection').style.display = 'none';
    
    // Karşılama bölümünü göster
    const welcomeSection = document.getElementById('welcomeSection');
    welcomeSection.classList.add('show');
    
    // Karşılama mesajını güncelle
    updateWelcome(name);
    
    // Saat ve tarihi her saniye güncelle
    setInterval(() => updateWelcome(name), 1000);
}

// Karşılama mesajını güncelle
function updateWelcome(name) {
    const now = new Date();
    
    // Saat formatı
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Gün adları
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const dayName = days[now.getDay()];
    
    // Tarih formatı
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    
    // Karşılama mesajı
    const greeting = `Merhaba ${name}! Hoş geldin!`;
    
    // Saat ve tarih bilgisi
    const timeDate = `${hours}:${minutes}:${seconds} - ${dayName}, ${day}.${month}.${year}`;
    
    // DOM'u güncelle
    document.getElementById('greeting').textContent = greeting;
    document.getElementById('timeDate').textContent = timeDate;
}

// Formu sıfırla
function resetForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('inputSection').style.display = 'block';
    document.getElementById('welcomeSection').classList.remove('show');
}






