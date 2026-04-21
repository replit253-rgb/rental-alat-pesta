import { ShieldCheck, Clock, MapPin, Headphones, Package, Star } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Kualitas Terjamin',
    desc: 'Seluruh peralatan kami terawat, bersih, dan melalui inspeksi sebelum dikirim ke acara kamu.',
    color: 'text-emerald-500 bg-emerald-50',
  },
  {
    icon: Clock,
    title: 'Tepat Waktu',
    desc: 'Pengiriman dan pemasangan tepat waktu sesuai jadwal — tidak ada keterlambatan yang merusak rencana.',
    color: 'text-sky-500 bg-sky-50',
  },
  {
    icon: MapPin,
    title: 'Antar Jemput',
    desc: 'Kami antarkan ke lokasi acaramu dan jemput kembali setelah acara selesai. Gratis area tertentu!',
    color: 'text-amber-500 bg-amber-50',
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    desc: 'Tim kami siap membantu kapan saja lewat WhatsApp. Konsultasi gratis, tanpa biaya tersembunyi.',
    color: 'text-rose-500 bg-rose-50',
  },
  {
    icon: Package,
    title: 'Paket Fleksibel',
    desc: 'Sewa per item atau paket lengkap. Bisa custom sesuai kebutuhan dan budget acaramu.',
    color: 'text-violet-500 bg-violet-50',
  },
  {
    icon: Star,
    title: 'Rating Bintang 5',
    desc: 'Dipercaya ratusan keluarga untuk momen spesial mereka. Rating 4.9 dari 500+ ulasan.',
    color: 'text-orange-500 bg-orange-50',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Kenapa Festivo?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
              Kami Bukan Sekadar<br />
              <span className="text-amber-500">Penyewaan Biasa</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Festivo hadir untuk memastikan setiap detail acaramu sempurna. Kami memberikan pengalaman sewa yang profesional, mudah, dan menyenangkan dari awal hingga akhir.
            </p>
            <div className="relative rounded-2xl overflow-hidden h-60 lg:h-72">
              <img
                src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tim Festivo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[
                      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=60',
                      'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=60',
                      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60',
                    ].map((src, i) => (
                      <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                    ))}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">+500 Pelanggan Puas</div>
                    <div className="text-white/70 text-xs">bulan ini</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="p-5 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all duration-200 group"
                >
                  <div className={`w-10 h-10 rounded-xl ${f.color} flex items-center justify-center mb-3`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{f.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
