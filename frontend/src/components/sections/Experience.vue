<template>
  <section class="bg-[#000000ee] py-20 px-6">
    <div class="max-w-4xl mx-auto">

      <!-- TÍTULO -->
      <h2 class="flex items-center justify-center gap-3 mb-14 text-3xl font-bold text-center neon-title">
        <Icon icon="ph:briefcase-bold" class="text-[hsl(258,100%,64%)] text-3xl" />
        Experiencia
      </h2>

      <!-- EXPERIENCIAS -->
      <div class="space-y-10">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="group relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#383838] rounded-xl shadow-2xl p-6 transition-transform duration-700 hover:scale-[1.025] hover:ring-2 hover:ring-[hsl(258,100%,64%)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] backdrop-blur-sm"
        >
          <!-- Fondo hover -->
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[hsl(258,100%,34%)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-xl"></div>

          <!-- EMPRESA -->
          <h3 class="flex items-center gap-2 mb-1 text-xl font-semibold text-[hsl(258,100%,64%)] tracking-wide">
            <Icon :icon="exp.companyIcon" class="text-lg text-white/80" />
            {{ exp.company }}
          </h3>

          <!-- ROL + FECHAS -->
          <p class="flex flex-wrap items-center gap-2 mb-4 text-sm tracking-wide text-gray-400">
            <Icon icon="mdi:laptop" class="text-base text-purple-400" />
            {{ exp.role }}
            —
            <Icon icon="mdi:calendar-range" class="ml-2 text-base text-purple-400" />
            {{ exp.period }}
          </p>

          <!-- DESCRIPCIÓN -->
          <p class="text-sm leading-relaxed text-white/90">
            {{ exp.description }}
          </p>
        </div>
      </div>

      <!-- BOTÓN -->
      <div class="flex justify-center mt-14">
        <button
          @click="goToExperience"
          class="flex items-center gap-2 px-6 py-3 text-base font-semibold text-purple-400 transition border border-purple-500 rounded-full hover:bg-purple-700 hover:text-white hover:scale-105"
        >
          Ver más detalle
          <Icon icon="mdi:arrow-right-thin" />
        </button>
      </div>

    </div>
  </section>
</template>



<script setup>
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const router = useRouter()

const goToExperience = () => {
  router.push('/experience')
}

const experiences = [
  {
    company: 'CRAMER · Huacho',
    companyIcon: 'mdi:school-outline',
    role: 'Ingeniero de Software',
    period: 'Febrero 2025 – Julio 2025',
    description:
      'Desarrollo y gestión de una aplicación de escritorio con inteligencia artificial orientada a la evaluación automática de cartillas de exámenes. ' +
      'La solución permitió la digitalización de notas, análisis de resultados y optimización del proceso de calificación académica.'
  },
  {
    company: 'AGROLIT EIRL · Barranca',
    companyIcon: 'mdi:office-building-outline',
    role: 'Ingeniero de Software – ERP Empresarial',
    period: 'Febrero 2024 – Diciembre 2024',
    description:
      'Diseño e implementación de un sistema ERP empresarial personalizado utilizando Laravel, orientado a la gestión administrativa, inventarios, recursos humanos, caja y reportes. ' +
      'Se trabajó con migraciones de base de datos, adaptación de funcionalidades existentes y optimización de procesos internos según las necesidades del negocio.'
  }
]
</script>

<style scoped>
.neon-title {
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(to right, hsl(258, 100%, 64%), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
  letter-spacing: 0.07em;
}
</style>
