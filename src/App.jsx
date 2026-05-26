import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Camera, Film, Download, ExternalLink, Sparkles } from "lucide-react";

// Phase 1 setup:
// 1. Keep original photos/videos in OneDrive.
// 2. Add compressed preview images into your project folder: /public/photos/
// 3. Replace the sample image paths below with your real filenames.
// 4. Replace ONEDRIVE_FULL_ALBUM_LINK and ONEDRIVE_DOWNLOAD_LINK with public OneDrive share links.

const ONEDRIVE_FULL_ALBUM_LINK = "https://1drv.ms/f/c/efea1b5ed18c4f88/IgCciEyZUUyQSpUDQznyZaGkAXVsaw_XThP6EjCV_uHRdvg?e=mGutmY";
const ONEDRIVE_DOWNLOAD_LINK = "https://1drv.ms/f/c/efea1b5ed18c4f88/IgCciEyZUUyQSpUDQznyZaGkAXVsaw_XThP6EjCV_uHRdvg?e=mGutmY";
const HIGHLIGHT_VIDEO_LINK = "https://onedrive.live.com/REPLACE_WITH_HIGHLIGHT_VIDEO_LINK";
const BASE_URL = import.meta.env.BASE_URL;
const photo = (name) => `${BASE_URL}photos/${name}`;

const events = [
  {
    title: "Mandap",
    subtitle: "The beginning of blessings",
    cover: photo("mandap-01.jpg"),
  },
  {
    title: "Garba Night",
    subtitle: "Music, dance, family, and joy",
    cover: photo("garba-01.jpg"),
  },
  {
    title: "Wedding Ceremony",
    subtitle: "Two hearts, one journey",
    cover: photo("wedding-01.jpg"),
  },
  {
    title: "Family Moments",
    subtitle: "The memories we will always keep",
    cover: photo("family-01.jpg"),
  },
];

const gallery = [
  { src: photo("mandap-01.jpg"), title: "Mandap Moments", category: "Mandap" },
  { src: photo("mandap-02.jpg"), title: "Blessings", category: "Mandap" },
  { src: photo("garba-01.jpg"), title: "Garba Night", category: "Garba" },
  { src: photo("garba-02.jpg"), title: "Dance & Joy", category: "Garba" },
  { src: photo("wedding-01.jpg"), title: "Wedding Ceremony", category: "Wedding" },
  { src: photo("wedding-02.jpg"), title: "Sacred Moments", category: "Wedding" },
  { src: photo("family-01.jpg"), title: "Family", category: "Family" },
  { src: photo("family-02.jpg"), title: "Forever Memories", category: "Family" },
];

const filters = ["All", "Mandap", "Garba", "Wedding", "Family"];

export default function VruNeelWeddingWebsite() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredGallery = filter === "All" ? gallery : gallery.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-[#fbf7ef] text-stone-900">
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,_#facc15,_transparent_35%),radial-gradient(circle_at_bottom_right,_#dc2626,_transparent_30%)]" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur"
          >
            <Sparkles size={16} />
            #VruNielShaadiWedding
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-6xl font-semibold tracking-tight md:text-8xl"
          >
            Vrunda <span className="text-amber-300">&</span> Neel
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl"
          >
            Two families, countless blessings, and memories that will stay with us forever.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-4 text-xl text-amber-200"
          >
            પ્રેમ, પરિવાર અને યાદો
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#gallery"
              className="rounded-full bg-amber-300 px-6 py-3 font-medium text-stone-950 shadow-lg transition hover:bg-amber-200"
            >
              View Gallery
            </a>
            <a
              href={ONEDRIVE_FULL_ALBUM_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              Full OneDrive Album <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-center gap-3">
          <Heart className="text-red-700" />
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Our Wedding Story</h2>
            <p className="mt-2 text-stone-600">A small collection from our favorite wedding memories.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200"
            >
              <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                <img
                  src={event.cover}
                  alt={event.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="mt-1 text-sm text-stone-600">{event.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-stone-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex rounded-full bg-white/10 p-3">
            <Film />
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">Wedding Highlight</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Add your OneDrive highlight video link here. For best experience, keep a compressed version for preview and the full-quality version in OneDrive.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <p className="text-lg text-white/80">Highlight video placeholder</p>
            <a
              href={HIGHLIGHT_VIDEO_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-300 px-6 py-3 font-medium text-stone-950 transition hover:bg-amber-200"
            >
              Watch Highlight Video <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-red-100 p-3 text-red-800">
              <Camera />
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">Photo Gallery</h2>
            <p className="mt-2 text-stone-600">Curated previews. Full-resolution originals stay safely in OneDrive.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  filter === item
                    ? "bg-stone-950 text-white"
                    : "bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-stone-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredGallery.map((photo, index) => (
            <motion.button
              key={`${photo.src}-${index}`}
              onClick={() => setSelectedImage(photo)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group overflow-hidden rounded-3xl bg-white text-left shadow-sm ring-1 ring-stone-200"
            >
              <div className="aspect-square overflow-hidden bg-stone-200">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-stone-500">{photo.category}</p>
                <h3 className="font-semibold">{photo.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-[2rem] bg-gradient-to-br from-red-900 to-amber-800 p-8 text-center text-white shadow-xl md:p-12">
          <h2 className="text-3xl font-semibold">Want the full album?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            View or download original full-quality wedding photos and videos from OneDrive.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={ONEDRIVE_FULL_ALBUM_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-stone-950 transition hover:bg-amber-100"
            >
              View Full Album <ExternalLink size={16} />
            </a>
            <a
              href={ONEDRIVE_DOWNLOAD_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Download Originals <Download size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 px-6 py-8 text-center text-sm text-stone-500">
        Made with love for Vrunda & Neel · #VruNielShaadiWedding
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-h-[90vh] max-w-5xl overflow-hidden rounded-3xl bg-white" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} className="max-h-[78vh] w-full object-contain bg-black" />
            <div className="flex items-center justify-between gap-4 p-4">
              <div>
                <p className="text-sm text-stone-500">{selectedImage.category}</p>
                <h3 className="font-semibold text-stone-900">{selectedImage.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
