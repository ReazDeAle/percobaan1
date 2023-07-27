// let nama = 'reza'
// let usia = 30
// let tinggiBadan = 174.5
// let beratBadan
// let pacar = 1

// beratBadan = 60

// if (pacar == null) {
//     pacar = 'belum punya'
// }
// else {
//     pacar = 'sudah punya'
// }

// let saldoAwal = 500
// let saldoTambahan = 400
// const hutang = 200
// const saldoAkhir = saldoAwal + saldoTambahan - hutang

// const x = 15
// const y = 5
// const z = x / y

// alert(`nilai x = ${x} / nilai y = ${y} maka hasilnya ${z}`)

// alert(
//     `nama saya ${nama} usia saya itu ${usia} tinggi badan saya adalah ${tinggiBadan}cm berat badan saya ${beratBadan}kg dan pacar saya ${pacar}`
// )
// alert(
//     `saldo awal saya sebesar Rp. ${saldoAwal} & saldo tambahan yang akan saya miliki sebesar Rp. ${saldoTambahan} jadi total saldo yang saya miliki adalah sebesar Rp. ${saldoAkhir}`
// )
//--------------------------------------------------------------
let namaGuru = ['jodi', 'bunga', 'rahman', 'fauzan']
// namaGuru.push('dea', 'fikri')
// namaGuru.shift()
// namaGuru.pop()
// alert(namaGuru)

// let namaGuru = []
// namaGuru[0] = 'dea'
// namaGuru[1] = 'fikri'

// alert(namaGuru)

//for loop

// for(let i = 0; i <=10; i++) {
//     console.log(namaGuru[i])
// }

// let i = 0
// while(i<10){
//     i++
//     console.log('reza')
// }

let hari = new Date().getDay()
let namaHari = ['ahad', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu',]
let pergantianHari = namaHari[hari]
console.log(pergantianHari)

// switch(hari) {
//     case 1: hari = 'senin'
//     break
//     case 2: hari = 'selasa'
//     break
//     case 3: hari = 'rabu'
//     break
//     case 4: hari = 'kamis'
//     break
//     case 5: hari = 'jumat'
//     break
//     case 6: hari = 'sabtu'
//     break
//     case 7: hari = 'ahad'
//     break
//     default: hari = 'error'
//     break
// }

// document.getElementById("h2").innerHTML = `hari ini adalah hari ${hari}`

// alert(`hari ini adalah hari ${hari}`)