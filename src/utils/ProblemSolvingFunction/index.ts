export function fTest1(arr: any) {
  // Get Nilai Terkecil
  const min = Math.min(...arr);
  // Get Nilai Terbesar
  const max = Math.max(...arr);
  // Filter Array Kecuali Nilai Terbesar
  const arrMin = arr.filter((data: any) => data !== max);
  // Filter Array Kecuali Nilai Terkecil
  const arrMax = arr.filter((data: any) => data !== min);
  // Jumlah Semua Nilai Array yang sudah di filter
  let avgMin = arrMin.reduce((val: any, nilaiSekarang: any) => {
    return val + nilaiSekarang;
  }, 0);
  // Jumlah Semua Nilai Array yang sudah di filter
  let avgMax = arrMax.reduce((val: any, nilaiSekarang: any) => {
    return val + nilaiSekarang;
  }, 0);
  // Mengirimkan Hasil
  return ["Rata-Rata Min: ", avgMin, " Rata-Rata Max:", avgMax];
}

export function fTest2(arr: any) {
  const n = arr.length;
  // Filter Array Kecuali Nilai Terbesar
  const arrNegatif = arr.filter((data: any) => data < 0);
  // Filter Array Kecuali Nilai Terkecil
  const arrPositif = arr.filter((data: any) => data > 0);
  // Filter Array Kecuali Nilai Terkecil
  const arrZero = arr.filter((data: any) => data === 0);

  const hasilNegatif = arrNegatif.length / n;
  const hasilPositif = arrPositif.length / n;
  const hasilZero = arrZero.length / n;

  // Mengirimkan Hasil
  return [
    "Hasil Positif: ",
    hasilPositif,
    " Hasil Negatif:",
    hasilNegatif,
    " Hasil Zero: ",
    hasilZero,
  ];
}

export function fTest3(example: any) {
  var hours = Number(example.match(/^(\d+)/)[1]);
  var minutes = Number(example.match(/:(\d+)/)[1]);
  var scond = Number(example.match(/:(\d{2}) (PM|AM)$/)[1]);
  var AMPM = example.match(/\s(.*)$/)[1];
  if (AMPM == "PM" && hours < 12) hours = hours + 12;
  if (AMPM == "AM" && hours == 12) hours = hours - 12;
  var sHours = hours.toString();
  var sMinutes = minutes.toString();
  var sScond = scond.toString();
  if (hours < 10) sHours = "0" + sHours;
  if (minutes < 10) sMinutes = "0" + sMinutes;
  if (scond < 10) sScond = "0" + sScond;

  // Mengirimkan Hasil
  return [sHours + ":" + sMinutes + ":" + sScond];
}
