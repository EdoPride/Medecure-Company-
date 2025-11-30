import React from "react";
import { FaPaintBrush, FaHandSparkles, FaRegSmileBeam, FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import image1 from "../assets/before.webp";
import image2 from "../assets/nailEx2.avif";
import image3 from "../assets/nailex3.avif";

export default function Home() {
    const images = [image1, image2, image3];
  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center px-6">

        {/* Content */}
        <div className="text-center w-full max-w-md space-y-6">

          {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Beautiful <br />
          Nails
        </h1>

        <h2 className="text-3xl md:text-5xl font-extrabold">
          <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
            Beautiful B*E
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-white/80 text-base leading-relaxed">
          GlamNails Studio offers premium nail care, stunning designs, and a relaxing beauty experience. 
          Treat yourself today — you deserve it.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">

          {/* Book Button */}
          <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-xl transition-all">
            Book Appointment
          </button>

          {/* View Services (Glass Button) */}
          <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-semibold transition-all shadow-lg">
            View Services
          </button>

        </div>
      </div>
    </section>


        {/* featured service*/}

<section className="w-full py-16 px-6 bg-white/5 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">
            Our Signature Services
          </h2>
          <p className="text-white/70 mt-2">
            Premium treatments designed to make your nails look flawless.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Gel Nails */}
          <FeatureCard
            icon={<FaHandSparkles className="text-purple-400 text-4xl" />}
            title="Gel Nails"
            desc="Shiny, long-lasting gel finish."
          />

          {/* Acrylic Extensions */}
          <FeatureCard
            icon={<FaPaintBrush className="text-pink-400 text-4xl" />}
            title="Acrylic Extensions"
            desc="Custom length & shape extensions."
          />

          {/* Mani + Pedi */}
          <FeatureCard
            icon={<FaRegSmileBeam className="text-blue-400 text-4xl" />}
            title="Manicure & Pedicure"
            desc="Relaxing care for hands & feet."
          />

          {/* Custom Nail Art */}
          <FeatureCard
            icon={<FaPaintBrush className="text-yellow-300 text-4xl" />}
            title="Custom Nail Art"
            desc="Unique, creative designs."
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 text-center">

          {/* Customer Count */}
          <div className="bg-white/10 backdrop-blur-md py-6 rounded-xl border border-white/20 shadow-lg">
            <FaUserFriends className="text-purple-300 text-5xl mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-white">2,850+ Happy Clients</h3>
            <p className="text-white/60 mt-1">Trusted by customers across the city</p>
          </div>

          {/* Amsterdam Locations */}
          <div className="bg-white/10 backdrop-blur-md py-6 rounded-xl border border-white/20 shadow-lg">
            <FaMapMarkerAlt className="text-pink-300 text-5xl mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-white">3 Locations in Amsterdam</h3>
            <p className="text-white/60 mt-1">Central • West • Zuid</p>
          </div>

        </div>

      </div>
    </section>
 {/*pivtures and proof of work */}

   <section className="w-full py-20 px-6 bg-black/10 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Proof of Work</h2>
          <p className="text-white/70 mt-2">
            A glimpse into our most stunning nail transformations.
          </p>
        </div>

        {/* Grid of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/10 bg-white/5 backdrop-blur-lg"
            >
              <img
                src={src}
                alt="Portfolio Work"
                className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-semibold text-lg">
                  Glam Nails • Signature Work
                </p>
                <p className="text-white/70 text-sm">Tap to view details</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/20 shadow-lg hover:scale-105 transition-all text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-white/60 text-sm mt-1">{desc}</p>
    </div>
  );
}