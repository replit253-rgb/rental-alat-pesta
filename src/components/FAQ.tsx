import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Berapa lama minimal durasi sewa?',
    a: 'Minimal sewa adalah 1 hari (24 jam). Untuk sewa lebih dari 3 hari, kami memberikan diskon khusus yang bisa didiskusikan langsung via WhatsApp.',
  },
  {
    q: 'Apakah ada biaya pengiriman?',
    a: 'Pengiriman gratis untuk area dalam kota dengan minimum order tertentu. Untuk area luar kota, biaya pengiriman dihitung berdasarkan jarak dan volume barang.',
  },
  {
    q: 'Bagaimana cara pembayaran?',
    a: 'Kami menerima DP 50% saat konfirmasi pemesanan, dan pelunasan dilakukan pada saat pengiriman barang. Metode pembayaran: transfer bank, QRIS, atau tunai.',
  },
  {
    q: 'Apakah bisa custom dekorasi sesuai tema?',
    a: 'Tentu! Tim dekorasi kami siap membantu mewujudkan tema pesta impianmu. Konsultasikan via WhatsApp dan kami akan memberikan saran dan estimasi harga.',
  },
  {
    q: 'Apa yang terjadi jika alat rusak saat digunakan?',
    a: 'Kami memiliki stok cadangan untuk kondisi darurat. Jika kerusakan terjadi akibat force majeure, tidak ada biaya tambahan. Kerusakan akibat kelalaian dikenakan biaya perbaikan sesuai kondisi.',
  },
  {
    q: 'Berapa jauh sebelumnya harus pesan?',
    a: 'Semakin awal semakin baik! Kami sarankan pesan minimal 7 hari sebelum acara untuk memastikan ketersediaan. Untuk high season (akhir tahun, lebaran) disarankan pesan 1 bulan sebelumnya.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Pertanyaan yang Sering{' '}
            <span className="text-amber-500">Ditanyakan</span>
          </h2>
          <p className="text-slate-500">
            Tidak menemukan jawaban yang kamu cari? Chat langsung via WhatsApp!
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                open === i ? 'border-amber-300 shadow-sm shadow-amber-100' : 'border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className={`font-semibold text-sm pr-4 ${open === i ? 'text-amber-600' : 'text-slate-800'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${open === i ? 'rotate-180 text-amber-500' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
