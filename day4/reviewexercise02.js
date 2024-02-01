const profile = {
    nama_depan: "Antonius",
    nama_belakang: "Baraja",
    hobi: ["menggambar", "berenang"],
    angka_favorit: 667,
    memakai_kacamata: true,
    umur: 32,
    jenis_kelamin: "pria"
}

console.log(profile)

console.log(`${profile.nama_depan} ${profile.nama_belakang}`)

profile.angka_favorit = 8

console.log(profile)

profile.hobi.push("coding")

console.log(profile)

profile.lulusan = "Hacktiv8"

console.log(profile)

profile.hobi.forEach(h => { console.log(h) })

console.log(Object.keys(profile))

console.log(Object.values(profile))

Object.keys(profile).forEach(k => { console.log(`${k} : ${profile[k]}`) })