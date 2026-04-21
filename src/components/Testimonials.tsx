import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sari Dewi',
    role: 'Pengantin',
    event: 'Pernikahan 200 Tamu',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Festivo benar-benar luar biasa! Tenda, kursi, dekorasi semuanya persis seperti yang kami mau. Tim mereka sangat responsif dan pengiriman tepat waktu. Acara nikahan kami jadi sempurna!',
    rating: 5,
  },
  {
    name: 'Budi Santoso',
    role: 'Penyelenggara Acara',
    event: 'Birthday Party 150 Tamu',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Sudah 3 kali pakai Festivo untuk berbagai acara dan selalu puas. Harga kompetitif, alat bagus, dan yang paling penting — tidak pernah mengecewakan soal ketepatan waktu.',
    rating: 5,
  },
  {
    name: 'Rina Kusuma',
    role: 'Ibu Rumah Tangga',
    event: 'Sunatan 100 Tamu',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Pertama kali sewa alat pesta langsung ke Festivo karena rekomen tetangga. Ternyata memang worth it! Kursi bersih, tenda kokoh, dan tim yang ramah. Pasti bakal balik lagi.',
    rating: 5,
  },
  {
    name: 'Ahmad Fauzi',
    role: 'EO Profesional',
    event: 'Corporate Event 300 Tamu',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Sebagai EO, saya butuh vendor yang bisa diandalkan. Festivo selalu memenuhi ekspektasi. Komunikasi mudah via WhatsApp, konfirmasi cepat, dan eksekusi lapangan sangat profesional.',
    rating: 5,
  },
  {
    name: 'Maya Putri',
    role: 'Mahasiswi',
    event: 'Wisuda Mini Party',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Budget terbatas tapi tetap mau acara yang bagus. Festivo bantu cari solusi paket yang pas! Hasilnya melebihi ekspektasi. Dekorasinya cantik banget dan semua tamu suka.',
    rating: 5,
  },
  {
    name: 'Hendra Wijaya',
    role: 'Pengusaha',
    event: 'Grand Opening Toko',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Sound system dari Festivo kualitasnya mantap. Semua tamu bisa dengar dengan jelas. Tim teknisi mereka juga standby selama acara berlangsung. Profesional banget!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Kata Mereka yang Sudah{' '}
            <span className="text-amber-500">Percaya Festivo</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Ini yang mereka katakan setelah acaranya sukses bersama Festivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <Quote size={28} className="text-amber-200 mb-4 flex-shrink-0" />
              <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-slate-900 font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role} · {t.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 bg-amber-50 border border-amber-200 rounded-2xl px-8 py-5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <div className="text-slate-700 font-semibold text-center sm:text-left">
            <span className="text-2xl font-extrabold text-amber-600">4.9 / 5.0</span>
            {' '}dari lebih dari{' '}
            <span className="font-bold text-slate-900">500 ulasan</span>{' '}pelanggan setia kami
          </div>
        </div>
      </div>
    </section>
  );
}
