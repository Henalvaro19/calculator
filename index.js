function hasil() {
  const jumlahpinjaman = parseFloat(document.getElementById("jumlahpinjaman").value);
  const annualBunga = parseFloat(document.getElementById("bunga").value);
  const waktu = parseInt(document.getElementById("waktu").value);
  const display = document.getElementById("display");
  const penjelasan = document.getElementById("penjelasan");

  if (isNaN(jumlahpinjaman) || isNaN(annualBunga) || isNaN(waktu) || jumlahpinjaman <= 0 || annualBunga < 0 || waktu <= 0) {
    display.value = "Input error";
    penjelasan.innerHTML = `
      <h3>Cara Penyelesaiannya</h3>
      <p>Input salah atau belum lengkap. Silakan isi semua kolom dengan benar.</p>
    `;
    return;
  }

  const bulan = (annualBunga / 100) / 12;
  const samaDengan = (jumlahpinjaman * bulan) / (1 - Math.pow(1 + bulan, -waktu));

  display.value = "Rp " + samaDengan.toLocaleString("id-ID", { minimumFractionDigits: 2 });

  penjelasan.innerHTML = `
    <h3>Cara Penyelesaiannya</h3>
    <p><b>Rumus Anuitas:</b><br>
       A = (M × i) / (1 - (1+i)<sup>-n</sup>)</p>
    <p><b>M</b> = Rp ${jumlahpinjaman.toLocaleString("id-ID")}<br>
       <b>i</b> = ${annualBunga}% ÷ 12 = ${(bulan*100).toFixed(4)}% per bulan<br>
       <b>n</b> = ${waktu} bulan</p>
    <p><b>Perhitungan:</b><br>
       A = ( ${jumlahpinjaman.toLocaleString("id-ID")} × ${(bulan).toFixed(6)} ) ÷ (1 - (1 + ${(bulan).toFixed(6)})<sup>-${waktu}</sup>)</p>
    <p><b>Hasil:</b><br>
       A = Rp ${samaDengan.toLocaleString("id-ID", { minimumFractionDigits: 2 })} per bulan</p>
  `;
}

function hapus() {
  document.getElementById("jumlahpinjaman").value = "";
  document.getElementById("bunga").value = "";
  document.getElementById("waktu").value = "";
  document.getElementById("display").value = "Rp 0";
  document.getElementById("penjelasan").innerHTML = `
    <h3>Cara Penyelesaiannya</h3>
    <p>Belum ada perhitungan. Silakan masukkan data pinjaman terlebih dahulu.</p>
  `;
}

const faders = document.querySelectorAll(".fade-up");

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
