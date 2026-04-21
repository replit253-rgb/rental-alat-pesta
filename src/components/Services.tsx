import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '6281234567890';

const services = [
  {
    title: 'Tenda & Marquee',
    desc: 'Tenda pesta, canopy, dan marquee premium berbagai ukuran untuk indoor maupun outdoor.',
    img: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 'Mulai Rp 500.000',
    tags: ['Tenda VIP', 'Canopy', 'Marquee'],
  },
  {
    title: 'Kursi & Meja',
    desc: 'Kursi tiffany, banquet, dan meja berbagai model cocok untuk semua tema pesta.',
    img: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 'Mulai Rp 5.000/kursi',
    tags: ['Tiffany', 'Banquet', 'Round Table'],
  },
  {
    title: 'Dekorasi & Backdrop',
    desc: 'Dekorasi bunga, balon, backdrop foto, dan elemen estetik untuk memperindah acaramu.',
    img: 'https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 'Mulai Rp 300.000',
    tags: ['Bunga', 'Balon', 'Backdrop'],
  },
  {
    title: 'Sound System',
    desc: 'Speaker, microphone, mixer, dan lighting profesional agar acaramu makin meriah.',
    img: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 'Mulai Rp 800.000',
    tags: ['Speaker', 'Mic', 'Lighting'],
  },
  {
    title: 'Peralatan Catering',
    desc: 'Chafing dish, prasmanan set, piring, gelas, dan peralatan sajian lengkap.',
    img: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 'Mulai Rp 50.000/set',
    tags: ['Prasmanan', 'Perlengkapan', 'Display'],
  },
  {
    title: 'Paket Lengkap',
    desc: 'Paket all-in tenda, kursi, dekorasi, dan sound system. Hemat lebih banyak!',
    img: 'https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 'Mulai Rp 3.500.000',
    tags: ['All-in-One', 'Hemat', 'Populer'],
    highlight: true,
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Semua yang Kamu Butuhkan<br />
            <span className="text-amber-500">untuk Pesta Sempurna</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Kami menyediakan ratusan pilihan peralatan pesta berkualitas tinggi dengan harga yang terjangkau dan layanan antar jemput ke lokasi acara.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                s.highlight
                  ? 'border-amber-400 shadow-lg shadow-amber-100'
                  : 'border-slate-100 shadow-sm hover:border-amber-200'
              }`}
            >
              {s.highlight && (
                <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  TERPOPULER
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-600 font-bold text-sm">{s.price}</span>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=Halo%20Festivo!%20Saya%20tertarik%20menyewa%20${encodeURIComponent(s.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
                  >
                    <MessageCircle size={13} />
                    Tanya Harga
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
