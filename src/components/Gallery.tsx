const images = [
  {
    src: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Pernikahan Outdoor',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Setup Meja Makan',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Dekorasi Pesta',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Pencahayaan Malam',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Pesta Ulang Tahun',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Sound System',
    span: '',
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Galeri
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Karya Kami untuk{' '}
            <span className="text-amber-400">Momen Spesialmu</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Ratusan event sukses telah kami tangani. Lihat hasil kerja tim kami di berbagai jenis acara.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span} ${i === 0 ? 'h-64 lg:h-auto' : 'h-44'}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
