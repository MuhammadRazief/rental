import { createI18n } from 'vue-i18n'

const messages = {
  id: {
    home: 'Beranda',
    about: 'Tentang Kami',
    armada: 'Armada',
    testimoni: 'Testimoni',
    kontak: 'Kontak',
    language: 'Indonesia',
    rental: 'Rental Mobil',
    rental_desc: 'Sewa mobil terbaik untuk perjalanan Anda dengan harga terjangkau dan pelayanan terbaik.',
    armada_desc: 'Armada kami terdiri dari berbagai jenis mobil yang siap untuk disewa',
    btn_armada: 'Lihat Armada',
    btn_whatsapp: 'Rental Sekarang',
    stats: 'Statistik Layanan Kami',
    penyewaan: 'Penyewa Puas',
    armada_tersedia: 'Armada Tersedia',
    kota: 'Kota yang Dilayani',
    order: 'Order Terselesaikan',
    perjalanan: 'Perjalanan Nyaman Dimulai dari sini',
    kami_hadir: 'Kami hadri untuk memberikan pelayanan rental mobil terbaik, aman, dan nyaman untuk Anda.',
    proses:'Proses Mudah',
    terpercaya: 'Terpercaya',
    ribuan: 'Ribuan Pelanggan Puas',
    kenapa:'Kenapa Menggunakan Jasa Kami?',
    pelayanan: 'Pelayanan Terbaik',
    pelayanan_ramah: 'Pelayanan ramah dan profesional untuk kenyamanan Anda.',
    harga: 'Harga Terjangkau',
    harga_sewa: 'Harga sewa kompetitif sesuai kualitas mobil & layanan kami.',
    armada_lengkap: 'Armada Lengkap',
    beragam: 'Beragam pilihan mobil, dari keluarga hingga premium.'
  },
  en: {
    home: 'Home',
    about: 'About Us',
    armada: 'Fleet',
    testimoni: 'Testimonials',
    kontak: 'Contact',
    language: 'Language',
    rental: 'Car Rental',
    rental_desc: 'Rent the best car for your trip with affordable prices and the best service.',
    armada_desc: 'Our fleet consists of various types of cars ready to be rented',
    btn_armada: 'View Fleet',
    btn_whatsapp: 'Rent Now',
    stats: 'Our Service Statistics',
    penyewaan: 'Satisfied Tenants',
    armada_tersedia: 'Available Fleet',
    kota: 'cities Served',
    order: 'Completed Orders',
    perjalanan: 'Comfortable trips start from here',
    kami_hadir: 'We are here to provide the best, safe, and comfortable car rental service for you.',
    proses:'Easy Process',
    terpercaya: 'Trusted',
    ribuan: 'Thousands of Satisfied Customers',
    kenapa: 'Why Use Our Services?',
    pelayanan: 'Best Service',
    pelayanan_ramah: 'Friendly and professional service for your comfort.',
    harga: 'Affordable Prices',
    harga_sewa: 'Competitive rental prices according to the quality of our cars & services.',
    armada_lengkap: 'Complete Fleet',
    beragam: 'A wide selection of cars, from family to premium.'
  }
}

const i18n = createI18n({
  legacy: false, // ✅ Tambahkan ini!
  locale: 'id',
  fallbackLocale: 'en',
  messages,
})

export default i18n
