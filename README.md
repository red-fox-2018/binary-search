fungsi OWN SORT
1. looping arr dari kiri ke kanan.
2. setelah itu buat array kosong untuk value yang sekarang
3. buatlah looping di mulai dari sebelum index yang pertama, looping terbalik selama index masih lebih besar sama dengan 0, dan juga element sekarang masih lebih besar dari value no.2
4. buat element selanjutnya menjadi elemen sekarang
5. setelah itu isi elemen value(no.2) dengan elemen selanjutnya
6. return kembali arr



fungsi binary search
1. buat batas bawah dengan nilai 0
2. buat batas atas dengan jumlah index
3. selama batas bawah masih lebih kecil atau sama dengan batas atas lakukan looping while
4. buat variable nilai tengah dengan cara batas bawah ditambah batas atas dibagi dengan 2
5. jika nilai yang di cari sama dengan nilai array mid maka return index mid
  6. jika search lebih besar dari array mid maka
    6a. ganti batas bawah dengan mid ditambahkan 1
  7. jika search lebih kecil dari array mid maka
    7a. ganti batas atas dengan mid -1
8. di luar looping return -1 karena yang di cari tidak ada
