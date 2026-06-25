import { motion } from "framer-motion";

const images = [

  "/sureds25.JPG",
  "/technovation pic 1.JPG",
  "/technovation pic 2.JPG",
];

function Gallery() {
  return (
    <section id="gallery" className="py-24 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[4px] text-pink-300 font-semibold">
          Gallery
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Moments Along My Journey
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt="Portfolio moment"
              className="rounded-3xl border border-white/10 hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;