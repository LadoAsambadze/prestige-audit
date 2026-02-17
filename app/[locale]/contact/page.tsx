"use client";
import { motion } from "framer-motion";
import ContactForm from "./_components/ContactForm";
import MapboxMap from "./_components/MapBox";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Form Slide Up */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ContactForm />
      </motion.div>

      {/* 2. Map Section Slide Up */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      >
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 mb-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"
            />
            <span className="text-blue-700 dark:text-blue-400 font-semibold tracking-wider uppercase text-xs">
              Find Us
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-slate-800 dark:text-slate-100">
            Visit Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Office
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            We're located in the heart of the financial district.
          </p>
        </div>

        <MapboxMap
          latitude={41.6415}
          longitude={41.6367}
          title="Our Office Location"
          address="123 Financial District, Suite 450, New York, NY 10004"
          zoom={16}
          enable3D={true}
          defaultView="3d"
          markerColor="#3b82f6"
          showDirections={true}
          className="w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden"
        />
      </motion.div>
    </div>
  );
}
