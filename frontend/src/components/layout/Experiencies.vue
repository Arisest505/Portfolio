<template>
  <section class="px-8 py-20 text-white bg-black font-orbitron">
     <h2 class="flex items-center justify-center gap-3 text-3xl font-bold text-center neon-title mb-14">
        <Icon icon="ph:briefcase-bold" class="text-[hsl(0,0%,100%)] text-3xl" />
        Experiencia Profesional
      </h2>

    <div class="grid gap-10 md:grid-cols-2">
      <ExperienceCard
        v-for="(exp, index) in experiences"
        :key="index"
        :experience="exp"
      />
    </div>
  </section>
</template>

<script setup>
import ExperienceCard from '../sections/ExperienceCard.vue'
import { Icon } from '@iconify/vue'
const experiences = [
  {
    title: 'Ingeniero de Software – Aplicación con IA',
    company: 'CRAMER, Huacho',
    year: 'Febrero – Julio 2025',
    image: '/10.png', // puedes usar /vista.jpg si no tienes otra
    description:
      'Diseñé y desarrollé una aplicación de escritorio inteligente para automatizar la lectura, calificación y gestión de cartillas de exámenes. La solución utilizó técnicas de visión por computadora e inteligencia artificial para identificar respuestas, calcular puntajes y generar reportes automáticos por estudiante. Además, se implementó un panel administrativo con control de usuarios y almacenamiento local seguro. Esta herramienta permitió reducir en más de un 80% el tiempo de corrección manual, mejorando la eficiencia institucional y la precisión en los resultados.',
    technologies: [
      { name: 'Python (IA y OCR)', icon: 'logos:python' },
      { name: 'Electron', icon: 'logos:electron' },
      { name: 'React', icon: 'logos:react' },
      { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' }
    ]
  },
  
]

</script>
