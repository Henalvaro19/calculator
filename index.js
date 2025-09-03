function calculateInstallment() {
  const loan = parseFloat(document.getElementById("loan").value);
  const annualRate = parseFloat(document.getElementById("rate").value);
  const time = parseInt(document.getElementById("time").value);
  const display = document.getElementById("display");
  const explanation = document.getElementById("explanation");

  if (isNaN(loan) || isNaN(annualRate) || isNaN(time) || loan <= 0 || annualRate < 0 || time <= 0) {
    display.value = "Input error";
    explanation.innerHTML = `
      <h3>Cara Penyelesaiannya</h3>
      <p>Input salah atau belum lengkap. Silakan isi semua kolom dengan benar.</p>
    `;
    return;
  }

  const monthlyRate = (annualRate / 100) / 12;
  const installment = (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -time));
  
  display.value = "Rp " + installment.toLocaleString("id-ID", { minimumFractionDigits: 2 });

  explanation.innerHTML = `
    <h3>Cara Penyelesaiannya</h3>
    <p><b>Rumus Anuitas:</b><br>
       A = (P × i) / (1 - (1+i)<sup>-n</sup>)</p>
    <p><b>P</b> = Rp ${loan.toLocaleString("id-ID")}<br>
       <b>i</b> = ${annualRate}% ÷ 12 = ${(monthlyRate*100).toFixed(4)}% per bulan<br>
       <b>n</b> = ${time} bulan</p>
    <p><b>Perhitungan:</b><br>
       A = ( ${loan.toLocaleString("id-ID")} × ${(monthlyRate).toFixed(6)} ) ÷ (1 - (1 + ${(monthlyRate).toFixed(6)})<sup>-${time}</sup>)</p>
    <p><b>Hasil:</b><br>
       A = Rp ${installment.toLocaleString("id-ID", { minimumFractionDigits: 2 })} per bulan</p>
  `;
}

function clearDisplay() {
  document.getElementById("loan").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("time").value = "";
  document.getElementById("display").value = "Rp 0";
  document.getElementById("explanation").innerHTML = `
    <h3>Cara Penyelesaiannya</h3>
    <p>Belum ada perhitungan. Silakan masukkan data pinjaman terlebih dahulu.</p>
  `;
}
