**Nama:** Muhammad Rizqon Ahsany
**Kelas:** FWD-Batch-13

# DOM Ditambahkan
## 1. Memilih Varian Produk
Bertujuan untuk pengguna dapat memilih varian dari produk yaiu Black atau Silver. Menggunakan `function changeVariant(color)`.
## 2. Menambah Quantity
Bertujuan untuk pengguna dapat menambahkan jumlah produk yang ingin dibeli dengan menekan tombo plus `(+)`. Menggunakan fuction `changeQuantity(amount)`.

## 3. Mengurangi Quantity
Bertujuan untuk pengguna dapat mengurangi jumlah produk yang ingin dibeli dengan menekan tombo minus `(-)`. Menggunakan fuction `changeQuantity(amount)`.

## 4. Mengubah Quantity Manual
Bertujuan untuk pengguna dapat memasukkan quantity secara langsung tanpa harus menekan tombol plus `(+)` dan minus `(-)`. Menggunakan `function updateSummary()`.

## 5. Add to Cart
Bertujuan untuk menambahkan produk ke keranjang lokal setelah pengguna menentukan warna dan quantity. Menggunakan `function addToCart()`.


# Pengujian Interaksi DOM

## 1. Informasi Pengujian

- **Halaman:** Product Detail – Dynamic M75B
- **File:** `Hardcode/Halaman-JS.html`
- **Teknologi:** HTML, CSS, Vanilla JavaScript
- **Jumlah skenario pengujian:** 10

## 2. Tabel Pengujian DOM

| No. | Input | Expected Result | Actual Result | Screenshot |
|---|---|---|---|---|
| 1 | Pilih varian Black | Gambar berubah menjadi Black, nama warna Black, stok 10 item. | Berhasil berubah menjadi Black. |[HASIL](Pengujian/Input1.png) |
| 2 | Pilih varian Silver | Gambar berubah menjadi Silver, nama warna Silver, stok 8 item. | Berhasil berubah menjadi Silver. |[HASIL](Pengujian/Input2.png) |
| 3 | Ubah warna dari Silver ke Black | Informasi gambar, warna, dan stok kembali mengikuti varian Black tanpa reload halaman. | Berhasil tanpa reload. |[HASIL](Pengujian/Input3.gif) |
| 4 | Quantity 1, tekan tombol `(+)` | Quantity berubah menjadi 2, subtotal menjadi Rp2.998.000. | Subtotal menjadi Rp2.998.000. |[HASIL](Pengujian/Input4.png) |
| 5 | Varian Silver, quantity mencapai 8 | Tombol `(+)` dinonaktifkan karena mencapai batas stok. | Tombol nonaktif. |[HASIL](Pengujian/Input5.png) |
| 6 | Quantity mencapai 1 | Tombol `(−)` dinonaktifkan agar quantity tidak berkurang melalui tombol. | Tombol `(−)`nonaktif. |[HASIL](Pengujian/Input6.png) |
| 7 | Masukkan quantity -5 | Muncul pesan error karena quantity negatif. | Pesan error muncul. |[HASIL](Pengujian/Input7.png) |
| 8 | Masukkan quantity 2,5 | Muncul pesan error karena quantity bukan bilangan bulat. | Pesan error muncul. |[HASIL](Pengujian/Input8.png) |
| 9 | Varian Silver, masukkan quantity 10 | Muncul pesan error karena melebihi stok Silver (8). | Pesan error muncul. |[HASIL](Pengujian/Input9.png) |
| 10 | Black quantity 5, tekan Add to Cart | Muncul pesan sukses dan cart badge bertambah menjadi 5. | Pesan muncul, cart badge berubah. |[HASIL](Pengujian/Input10.png)|


