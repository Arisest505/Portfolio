<template>
  <section class="bg-[#000000ee] py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <!-- TÍTULO GENERAL CON ICONO -->
      <h2 class="flex items-center justify-center gap-3 text-3xl font-bold text-center neon-title mb-14">
        <Icon icon="ph:briefcase-bold" class="text-[hsl(258,100%,64%)] text-3xl" />
        Experiencia
      </h2>

      <!-- CARD -->
      <div
        class="group relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#383838] rounded-xl shadow-2xl p-6 transition-transform duration-700 hover:scale-[1.025] hover:ring-2 hover:ring-[hsl(258,100%,64%)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] backdrop-blur-sm"
      >
        <!-- Fondo animado en hover -->
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[hsl(258,100%,34%)]/10 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

        <!-- EMPRESA / INSTITUCIÓN -->
        <h3 class="text-xl font-semibold text-[hsl(258,100%,64%)] mb-1 tracking-wide flex items-center gap-2">
          <Icon icon="mdi:school-outline" class="text-lg text-white/80" />
          CRAMER, Huacho
        </h3>

        <!-- PUESTO + FECHAS -->
        <p class="flex items-center gap-2 mb-4 text-sm tracking-wide text-gray-400">
          <Icon icon="mdi:laptop" class="text-base text-purple-400" />
          Ingeniero Software —
          <Icon icon="mdi:calendar-range" class="ml-2 text-base text-purple-400" />
          Febrero 2025 a Julio 2025
        </p>

        <!-- DESCRIPCIÓN -->
        <p class="text-sm leading-relaxed text-white/90">
          Se desarrolló y gestionó una aplicación de escritorio con IA para la gestión de notas y calificaciones de cartillas de exámenes, logrando el objetivo.
        </p>
      </div>
    </div>

          <!-- Botón Ver más centrado -->
        <div class="flex justify-center mt-12">
            <button
              @click="goToExperience"
              class="flex items-center gap-2 px-6 py-3 text-base font-semibold text-purple-400 transition border border-purple-500 rounded-full hover:bg-purple-700 hover:text-white hover:scale-105"
            >
              Ver más detalle
              <Icon icon="mdi:arrow-right-thin" />
            </button>
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
