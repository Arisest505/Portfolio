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
  title: 'Ingeniero de Software – ERP Empresarial Personalizado',
  company: 'AGROLIT EIRL · Barranca',
  year: 'Febrero – Diciembre 2024',
  image: '/image.png',
  description:
    'Diseño, desarrollo e implementación de un sistema ERP empresarial totalmente personalizado, orientado a optimizar los procesos internos de la organización. ' +
    'El sistema incluyó módulos de gestión administrativa, control de inventarios, caja y facturación, recursos humanos, reportes gerenciales y manejo de múltiples empresas. ' +
    'Se trabajó sobre el framework Laravel, adaptando y migrando funcionalidades existentes, estructurando la base de datos mediante migraciones y aplicando buenas prácticas de arquitectura y seguridad. ' +
    'La solución fue desarrollada en estrecha colaboración con el empleador, logrando cumplir y superar los requerimientos funcionales y operativos establecidos.',
  technologies: [
    { name: 'Laravel', icon: 'logos:laravel' },
    { name: 'PHP', icon: 'logos:php' },
    { name: 'JavaScript', icon: 'logos:javascript' },
    { name: 'CSS', icon: 'logos:css-3' },
    { name: 'MySQL', icon: 'logos:mysql' }
  ]
},

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
