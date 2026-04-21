import { MessageCircle, ClipboardList, Truck, PartyPopper } from 'lucide-react';

const WA_NUMBER = '6281234567890';
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo%20Festivo!%20Saya%20mau%20pesan%20alat%20pesta.`;

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Hubungi Kami via WhatsApp',
    desc: 'Ceritakan kebutuhan acaramu — tanggal, jenis pesta, jumlah tamu, dan lokasi. Kami siap membantu 7 hari seminggu.',
    color: 'bg-sky-50 text-sky-600',
    border: 'border-sky-100',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Pilih Paket & Konfirmasi',
    desc: 'Tim kami akan menyiapkan penawaran sesuai kebutuhan. Pilih, konfirmasi, dan lakukan pembayaran DP yang mudah.',
    color: 'bg-amber-50 text-amber-600',
    border: 'border-amber-100',
  },
  {
    icon: Truck,
    step: '03',
    title: 'Kami Antar ke Lokasi',
    desc: 'Pada hari H, tim profesional kami akan mengantarkan dan memasang semua peralatan di lokasi acaramu.',
    color: 'bg-emerald-50 text-emerald-600',
    border: 'border-emerald-100',
  },
  {
    icon: PartyPopper,
    step: '04',
    title: 'Nikmati Acaramu!',
    desc: 'Nikmati pestamu tanpa khawatir. Setelah acara selesai, kami akan mengambil semua peralatan kembali.',
    color: 'bg-rose-50 text-rose-600',
    border: 'border-rose-100',
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-pesan" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Cara Pesan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Pesan dalam{' '}
            <span className="text-amber-500">4 Langkah Mudah</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-base">
            Proses pemesanan yang simpel dan transparan, tanpa ribet tanpa antri.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%-1rem)] w-[calc(100%-2rem)] h-px border-t-2 border-dashed border-slate-200 z-0" />
                )}
                <div className={`relative z-10 bg-white rounded-2xl p-6 border ${s.border} hover:shadow-lg transition-shadow duration-300`}>
                  <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4`}>
                    <Icon size={22} />
                  </div>
                  <div className="text-xs font-bold text-slate-300 mb-2 tracking-widest">LANGKAH {s.step}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-amber-200 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Mulai Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
