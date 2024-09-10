// src/components/Education.tsx
"use client"
import { motion } from "framer-motion";
import { education } from "../../../public/resume/resume";

const Education = () => (
  <section className="py-8">
    <motion.h2
      className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Education
    </motion.h2>
    <div className="space-y-6">
      {education.map((degree, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <h3 className="text-xl font-semibold text-gray-900">{degree.degree}</h3>
          <p className="text-gray-600">
            {degree.institution} | {degree.period}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Education;