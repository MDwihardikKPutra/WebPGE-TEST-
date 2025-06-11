import React from "react";
// Import Link jika Anda ingin menggunakan navigasi internal di halaman ini
// import { Link } from 'react-router-dom';

function Experience() {
  return (
    // Tambahkan padding atas (pt-20) untuk menghindari navbar fixed
    <div className="min-h-screen bg-app-white py-20 flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
          Our Experience
        </h1>
        <p className="text-lg text-dark-gray leading-relaxed mb-8">
          Ini adalah halaman detail untuk pengalaman kami. Di sini Anda bisa
          menampilkan portofolio proyek-proyek yang lebih rinci, studi kasus,
          atau pencapaian perusahaan.
        </p>
        <p className="text-md text-gray-600 leading-relaxed">
          Kami telah menangani berbagai proyek penting di sektor pembangkit
          listrik, dari perencanaan hingga pelaksanaan, memastikan setiap tahap
          memenuhi standar kualitas dan efisiensi tertinggi.
        </p>
        {/* Anda bisa menambahkan lebih banyak konten spesifik di sini, misalnya:
            - Daftar proyek dengan link ke halaman detail proyek jika ada
            - Statistik atau grafik tentang pencapaian
            - Testimoni klien
            - Gambar-gambar proyek
        */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-secondary-blue/10 p-6 rounded-lg text-left">
            <h3 className="text-xl font-semibold text-secondary-blue mb-3">
              Visi Kami
            </h3>
            <p className="text-dark-gray">
              Menjadi pemimpin dalam solusi energi yang inovatif dan
              berkelanjutan.
            </p>
          </div>
          <div className="bg-primary-red/10 p-6 rounded-lg text-left">
            <h3 className="text-xl font-semibold text-primary-red mb-3">
              Misi Kami
            </h3>
            <p className="text-dark-gray">
              Mewujudkan proyek-proyek energi dengan keunggulan teknis dan
              dampak positif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
